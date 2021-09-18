import { Auth0Provider } from '@bcwdev/auth0provider'
import { commentService } from '../services/CommentService'
import { subraggitService } from '../services/SubraggitService'
import BaseController from '../utils/BaseController'

export class CommentController extends BaseController {
  constructor() {
    super('api/comments')
    this.router
      .get('', this.getComments)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/:id', this.getCommentById)
      .post('', this.addComment)
      .delete('/:id', this.removeComment)
  }

  async getComments(req, res, next) {
    try {
      const comments = await commentService.getComments(req.query)
      res.send(comments)
    } catch (error) {
      next(error)
    }
  }

  async addComment(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const comment = await commentService.addComment(req.body)
      res.send(comment)
    } catch (error) {
      next(error)
    }
  }

  async getCommentById(req, res, next) {
    try {
      const comment = await commentService.getCommentById(req.params.id)
      res.send(comment)
    } catch (error) {
      next(error)
    }
  }

  async removeComment(req, res, next) {
    try {
      const removedComment = await commentService.removedComment(req.params.id, req.userInfo.id)
      res.send(removedComment)
    } catch (error) {
      next(error)
    }
  }
}
