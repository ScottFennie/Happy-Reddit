import { dbContext } from '../db/DbContext'
import { Forbidden } from '../utils/Errors'

class PostsService {
  async getPostById(id) {
    const post = await dbContext.Posts.findById(id)
    return post
  }

  async getPostComments(postId) {
    const foundPosts = await dbContext.Posts.find({ postId: postId })
    return foundPosts
  }

  async addPost(postData) {
    const post = await dbContext.Posts.create(postData)
    await post.populate('creator').execPopulate()
    // logger.log(subraggit.populate())
    return post
  }

  async deletePost(postId, userId) {
    const foundpost = await this.getPostById(postId)
    if (foundpost.creatorId.toString() !== userId) {
      throw new Forbidden("This ain't ur post, get lost!")
    }
    await foundpost.remove()
    return foundpost
  }

  async getPosts(query) {
    const posts = await dbContext.Posts.find(query)
    return posts
  }
}
export const postService = new PostsService()
