import { ProxyState } from '../AppState.js'
import { logger } from '../Utils/Logger.js'
import { subraggitsService } from ''

export class SubraggitsController {
  constructor() {

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
    //   this.subraggitId = data.subraggitId
    // this.title = data.title
    // this.description = data.description
    // this.rules = data.rules
    // this.creatorId = data.creatorId
    // this.img = data.img
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
