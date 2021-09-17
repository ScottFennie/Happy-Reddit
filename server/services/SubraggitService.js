import { dbContext } from '../db/DbContext'
import { logger } from '../utils/Logger'

class SubraggitService {
  async getSubraggitById(id) {
    const subraggit = await dbContext.Subraggits.findById(id)
    return subraggit
  }

  async getSubraggits(query) {
    const subraggits = await dbContext.Subraggits.find(query)
    return subraggits
  }

  async createSubraggit(subraggitData) {
    const subraggit = await dbContext.Subraggits.create(subraggitData)
    // await subraggit.populate()
    // logger.log(subraggit.populate())
    return subraggit
  }
}

export const subraggitService = new SubraggitService()
