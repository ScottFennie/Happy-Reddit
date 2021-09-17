import { ProxyState } from '../AppState.js'
import { postsService } from '../Services/PostsService.js'
import { logger } from '../Utils/Logger.js'

export class PostsController {
  constructor() {
    logger.log('shut up')
  }

  async createPost(id) {
    // eslint-disable-next-line no-undef
    event.preventDefault()
    /**
     * @type {HTMLFormElement}
     */
    // eslint-disable-next-line no-undef
    const form = event.target
    const postData = {
      title: form.title.value,
      content: form.content.value,
      img: form.img.value,
      subraggitId: id
    }
    try {
      await postsService.createPost(postData, id)
    } catch (error) {
      logger.log('createPost', error)
    }
  }
}
