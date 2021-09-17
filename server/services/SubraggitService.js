import { dbContext } from '../db/DbContext'
import { Forbidden } from '../utils/Errors'
import { logger } from '../utils/Logger'

class SubraggitService {
  async getSubraggitById(id) {
    const subraggit = await dbContext.Subraggits.findById(id)
    return subraggit
  }

  async getSubraggitPosts(SubId) {
    const foundPosts = await dbContext.Posts.find(p => p.subraggitId.toString() === SubId)
    return foundPosts
  }

  async getSubraggits(query) {
    const subraggits = await dbContext.Subraggits.find(query)
    return subraggits
  }

  async createSubraggit(subraggitData) {
    const subraggit = await dbContext.Subraggits.create(subraggitData)
    await subraggit.populate('creator').execPopulate()
    // logger.log(subraggit.populate())
    return subraggit
  }

  async removeSubraggit(subraggitId, userId) {
    const foundSubraggit = await this.getSubraggitById(subraggitId)
    if (foundSubraggit.creatorId.toString() !== userId) {
      throw new Forbidden("This ain't ur subraggit, get lost!")
    }
    await foundSubraggit.remove()
    return foundSubraggit
  }
}

export const subraggitService = new SubraggitService()
