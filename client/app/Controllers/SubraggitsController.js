import { ProxyState } from '../AppState.js'
import { logger } from '../Utils/Logger.js'
import { subraggitsService } from '../Services/SubraggitService.js'

function _drawSubraggit() {
  let template = ''
  ProxyState.subraggits.forEach(s => { template += s.Template })
  document.getElementById('subraggit').innerHTML = template
}

export class SubraggitsController {
  constructor() {
    _drawSubraggit()
    ProxyState.on('subraggits', _drawSubraggit)
  }

  async createSubraggit() {
    // eslint-disable-next-line no-undef
    event.preventDefault()
    /**
     * @type {HTMLFormElement}
     */
    // eslint-disable-next-line no-undef
    const form = event.target
    const subraggitData = {
      title: form.title.value,
      description: form.description.value,
      img: form.img.value
    }
    try {
      await subraggitsService.createSubraggit(subraggitData)
    } catch (error) {
      logger.log(error)
    }
  }
}
