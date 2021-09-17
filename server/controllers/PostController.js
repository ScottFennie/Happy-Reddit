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
      .delete('/:id', this.removePost)
  }

  async removePost(req, res, next) {
    try {
      const removedPost = await postService.deletePost(req.params.id, req.userInfo.id)
      res.send(removedPost)
    } catch (error) {
      next(error)
    }
  }

  async addPost(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const addedPost = await postService.addPost(req.body)
      res.send(addedPost)
    } catch (error) {
      next('Add post controller', error)
    }
  }

  async getPostById(req, res, next) {
    try {
      const post = await postService.getPostById(req.params.id)
      res.send(post)
    } catch (error) {
      next('get post by id', error)
    }
  }

  async getPosts(req, res, next) {
    try {
      const posts = await postService.getPosts(req.query)
      res.send(posts)
    } catch (error) {
      next('Get Posts controller', error)
    }
  }
}
