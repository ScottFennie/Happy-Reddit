import { ProxyState } from '../AppState.js'
import { postsService } from '../Services/PostsService.js'
import { logger } from '../Utils/Logger.js'

function _drawPosts() {
  // const foundPosts = ProxyState.posts.filter(p => p.subraggitId === subraggitId)
  // foundPosts.forEach(p => { template += p.Template })
  // document.getElementById(`${subraggitId}`).innerHTML = template
  ProxyState.subraggits.forEach(sub => {
    let template = ''
    const posts = ProxyState.posts.filter(p => p.subraggitId === sub.subraggitId)
    posts.forEach(post => {
      template += post.Template
    })
    document.getElementById(`${sub.subraggitId}`).innerHTML = template
  })
}

export class PostsController {
  constructor() {
    logger.log('shut up')
    this.getPosts()
    ProxyState.on('posts', _drawPosts)
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
      logger.log('createpost controller', postData)
      await postsService.createPost(postData)
      _drawPosts(id)
    } catch (error) {
      logger.log('createPost', error)
    }
  }

  async getPosts() {
    try {
      postsService.getPosts()
    } catch (error) {
      logger.log('getPosts controller', error)
    }
  }

  async getPostsById() {

  }
}
