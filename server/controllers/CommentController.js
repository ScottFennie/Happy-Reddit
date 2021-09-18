import { Auth0Provider } from '@bcwdev/auth0provider'
import { subraggitService } from '../services/SubraggitService'
import BaseController from '../utils/BaseController'

export class CommentController extends BaseController {
  constructor() {
    super('api/comments')
    this.router
      .get('', this.getComments)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/:id', this.getCommentById)
      .post('', this.createComments)
      .delete('/:id', this.removeComment)
      .get('/:id/posts/:id/comments', this.getPostComments)
  }

  async getPostComments(req, res, next) {
    try {
      const subraggitPosts = await subraggitService.getSubraggitPosts(req.params.id)
      res.send(subraggitPosts)
    } catch (error) {
      next(error)
    }
  }

  async getComments(req, res, next) {
    try {
      const comments = await subraggitService.getComments(req.query)
      res.send(comments)
    } catch (error) {
      next(error)
    }
  }

  async createComments(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const comment = await subraggitService.createComment(req.body)
      res.send(comment)
    } catch (error) {
      next(error)
    }
  }

  async getCommentById(req, res, next) {
    try {
      const comment = await subraggitService.getSubraggitById(req.params.id)
      res.send(comment)
    } catch (error) {
      next(error)
    }
  }

  async removeComment(req, res, next) {
    try {
      const removedComment = await subraggitService.removedComment(req.params.id, req.userInfo.id)
      res.send(removedComment)
    } catch (error) {
      next(error)
    }
  }
}
