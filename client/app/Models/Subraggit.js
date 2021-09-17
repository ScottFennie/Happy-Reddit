export class Subraggit {
  constructor(data) {
    this.subraggitId = data.subraggitId
    this.title = data.title
    this.description = data.description
    this.rules = data.rules
    this.creatorId = data.creatorId
    this.img = data.img
  }

  get Template() {
    return /* html */`
    
    `
  }
}
