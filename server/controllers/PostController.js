import BaseController from '../utils/BaseController'

export class PostController extends BaseController {
  constructor() {
    super('api/posts')
    this.router
      .get('', this.getPosts)
      .get('/:id', this.getPostById)
  }
}
