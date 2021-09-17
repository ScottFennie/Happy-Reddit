import { Auth0Provider } from '@bcwdev/auth0provider'
import { postService } from '../services/PostsService'
import BaseController from '../utils/BaseController'

export class PostController extends BaseController {
  constructor() {
    super('api/posts')
    this.router
      .get('', this.getPosts)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/:id', this.getPostById)
      .post('', this.addPost)
      .delete('/:id', this.deletePost)
  }

  deletePost(req, res, next) {
    try {

    } catch (error) {
      next(error)
    }
  }

  addPost(req, res, next) {
    try {

    } catch (error) {
      next(error)
    }
  }

  getPostById(arg0, getPostById) {
    throw new Error('Method not implemented.')
  }

  async getPosts() {
    try {
      postService.getPosts()
    } catch (error) {
      next(error)
    }
  }
}
