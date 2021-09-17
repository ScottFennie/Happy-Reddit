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
}

export const postsService = new PostsService()
