import { api } from './AxiosService.js'
import { ProxyState } from '../AppState.js'
import { Subraggit } from '../Models/Subraggit.js'
import { logger } from '../Utils/Logger.js'

class SubraggitsService {
  async createSubraggit(subraggitData) {
    const res = await api.post('', subraggitData)
    ProxyState.subraggits = [...ProxyState.subraggits, new Subraggit(res.data)]
    logger.log(ProxyState.subraggits)
  }
}

export const subraggitsService = new SubraggitsService()
