import { api } from './AxiosService.js'
import { ProxyState } from '../AppState.js'
import { Subraggit } from '../Models/Subraggit.js'
import { logger } from '../Utils/Logger.js'

class SubraggitsService {
  async createSubraggit(subraggitData) {
    const res = await api.post('api/subraggits', subraggitData)
    ProxyState.subraggits = [...ProxyState.subraggits, new Subraggit(res.data)]
    logger.log('subraggit service res', ProxyState.subraggits)
    logger.log(ProxyState.subraggits, '🕸 when create subraggit is done')
  }

  async deleteSubraggit(subraggitId) {
    const res = await api.delete('api/subraggits/' + subraggitId)

    ProxyState.subraggits = ProxyState.subraggits.filter(s => s.id !== subraggitId)
    logger.log(res, '🕸 when delete subraggit is done')
  }

  async getSubraggits() {
    const res = await api.get('api/subraggits')
    logger.log('getSubraggits', res)
    ProxyState.subraggits = res.data.map(s => new Subraggit(s))
    logger.log('subraggits after get', ProxyState.subraggits)
  }
}

export const subraggitsService = new SubraggitsService()
