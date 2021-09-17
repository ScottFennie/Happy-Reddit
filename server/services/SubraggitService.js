import { dbContext } from '../db/DbContext'

class SubraggitService {
  async getSubraggits(query) {
    const subraggits = await dbContext.Subraggits.find(query)
    return subraggits
  }

  async createSubraggit(subraggitData) {
    const subraggit = await dbContext.Subraggits.create(subraggitData)
    return subraggit
  }
}

export const subraggitService = new SubraggitService()
