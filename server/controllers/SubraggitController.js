import { Auth0Provider } from '@bcwdev/auth0provider'
import { subraggitService } from '../services/SubraggitService'
import BaseController from '../utils/BaseController'

export class SubraggitController extends BaseController {
  constructor() {
    super('api/subraggits')
    this.router
      .get('', this.getSubraggits)
      .get('/:id', this.getSubraggitById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createSubraggits)
  }

  async getSubraggits(req, res, next) {
    try {
      const subraggits = await subraggitService.getSubraggits(req.query)
      return res.send(subraggits)
    } catch (error) {
      next(error)
    }
  }

  async createSubraggits(req, res, next) {
    try {
      const subraggit = await subraggitService.createSubraggit(req.body)
      res.send(subraggit)
    } catch (error) {
      next(error)
    }
  }

  async getSubraggitById(req, res, next) {
    try {
      const subraggit = await subraggitService.getSubraggitById(req.params.id)
      return subraggit
    } catch (error) {
      next(error)
    }
  }
}
