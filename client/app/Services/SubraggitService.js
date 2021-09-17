import { api } from './AxiosService.js'
import { ProxyState } from '../AppState.js'
import { Subraggit } from '../Models/Subraggit.js'
import { logger } from '../Utils/Logger.js'

class SubraggitsService {
  async createSubraggit(subraggitData) {
    const res = await api.post('api/subraggits', subraggitData)
    logger.log('subraggit service res', res)
    ProxyState.subraggits = [...ProxyState.subraggits, new Subraggit(res.data)]
    logger.log(ProxyState.subraggits)
  }

  async deleteSubraggit(subraggitId) {
    const res = await api.delete('api/subraggits' + subraggitId)
    ProxyState.subraggits = ProxyState.subraggits.filter(s => s.id !== subraggitId)
    logger.log(res)
  }
}

export const subraggitsService = new SubraggitsService()
