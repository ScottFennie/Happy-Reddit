import { dbContext } from '../db/DbContext'

class SubraggitService {
  async getSubraggits(query) {
    const subraggits = await dbContext.Subraggits.find(query)
    return subraggits
  }
}

export const subraggitService = new SubraggitService()
