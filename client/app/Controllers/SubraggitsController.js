import { ProxyState } from '../AppState.js'
import { logger } from '../Utils/Logger.js'
import { subraggitsService } from '../Services/SubraggitService.js'

function _drawSubraggit() {
  // let template = ''
  // ProxyState.subraggits.forEach(s => { template += s.Template })
  // document.getElementById('subraggit').innerHTML = template

  let temp2 = ''
  ProxyState.subraggits.forEach(r => { temp2 += r.Template2 })
  document.getElementById('subraggits').innerHTML = temp2
}

export class SubraggitsController {
  constructor() {
    _drawSubraggit()
    this.getSubraggits()
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

  async drawPosts2(Sub) {
  // const foundPosts = ProxyState.posts.filter(p => p.subraggitId === subraggitId)
  // foundPosts.forEach(p => { template += p.Template })
  // document.getElementById(`${subraggitId}`).innerHTML = template
    ProxyState.subraggits.forEach(sub => {
      let template = ''
      const posts = ProxyState.posts.filter(p => p.subraggitId === Sub)
      posts.forEach(post => {
        template += post.Template
      })
      document.getElementById(`${Sub}`).innerHTML = template
    })
  }

  async drawOneSubraggit(subId) {
    const current = ProxyState.subraggits.find(s => s.subraggitId === subId)
    document.getElementById('subraggit').innerHTML = current.Template

    this.drawPosts2(subId)
  }

  async deleteSubraggit(subraggitId) {
    try {
      await subraggitsService.deleteSubraggit(subraggitId)
      logger.log(subraggitId, 'from deleteSubraggit from controller')
    } catch (error) {
      logger.log(error, 'from deleteSubraggit from controller')
    }
  }

  async getSubraggits() {
    try {
      subraggitsService.getSubraggits()
    } catch (error) {
      logger.log('☢ getSubraggits', error)
    }
  }
}
