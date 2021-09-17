import { Auth0Provider } from '@bcwdev/auth0provider'
import { postService } from '../services/PostsService'
import { subraggitService } from '../services/SubraggitService'
import BaseController from '../utils/BaseController'

export class SubraggitController extends BaseController {
  constructor() {
    super('api/subraggits')
    this.router
      .get('', this.getSubraggits)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/:id', this.getSubraggitById)
      .post('', this.createSubraggits)
      .delete('/:id', this.removeSubraggit)
      .get('/:id/posts', this.getSubraggitPosts)
  }

  async getSubraggitPosts(req, res, next) {
    try {
      const subraggitPosts = await postService.getPostById(req.params.id)
      res.send(subraggitPosts)
    } catch (error) {
      next(error)
    }
  }

  async getSubraggits(req, res, next) {
    try {
      const subraggits = await subraggitService.getSubraggits(req.query)
      res.send(subraggits)
    } catch (error) {
      next(error)
    }
  }

  async createSubraggits(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const subraggit = await subraggitService.createSubraggit(req.body)
      res.send(subraggit)
    } catch (error) {
      next(error)
    }
  }

  async getSubraggitById(req, res, next) {
    try {
      const subraggit = await subraggitService.getSubraggitById(req.params.id)
      res.send(subraggit)
    } catch (error) {
      next(error)
    }
  }

  async removeSubraggit(req, res, next) {
    try {
      const removedSubraggit = await subraggitService.removeSubraggit(req.params.id, req.userInfo.id)
      res.send(removedSubraggit)
    } catch (error) {
      next(error)
    }
  }
}
