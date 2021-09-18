import { dbContext } from '../db/DbContext'
import { Forbidden } from '../utils/Errors'

class CommentService {
  async getCommentById(id) {
    const comment = await dbContext.Comments.findById(id)
    return comment
  }

  async addComment(commentData) {
    const comment = await dbContext.Comments.create(commentData)
    await comment.populate('creator').execPopulate()
    // logger.log(subraggit.populate())
    return comment
  }

  async removeComment(commentId, userId) {
    const foundcomment = await this.getCommentById(commentId)
    if (foundcomment.creatorId.toString() !== userId) {
      throw new Forbidden("This ain't ur post, get lost!")
    }
    await foundcomment.remove()
    return foundcomment
  }

  async getComments(query) {
    const comments = await dbContext.Comments.find(query)
    return comments
  }
}
export const commentService = new CommentService()
