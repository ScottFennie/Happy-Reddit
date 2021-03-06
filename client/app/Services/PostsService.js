import { api } from './AxiosService.js'
import { ProxyState } from '../AppState.js'
import { Post } from '../Models/Post.js'
import { logger } from '../Utils/Logger.js'

class PostsService {
  async createPost(postData) {
    const res = await api.post('api/posts', postData)
    ProxyState.posts = [...ProxyState.posts, new Post(res.data)]
    logger.log('createPost Service', ProxyState.posts)
  }

  async getPosts() {
    const res = await api.get('api/posts')
    ProxyState.posts = res.data.map(p => new Post(p))
    logger.log('posts', res.data)
  }

  async drawPosts2(subId) {
    const posts = ProxyState.posts.filter(p => p.subraggitId === subId)

    return posts
  }
}

export const postsService = new PostsService()
