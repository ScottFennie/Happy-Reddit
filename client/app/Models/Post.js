export class Post {
  constructor(data) {
    this.postId = data.postId
    this.subraggitId = data.id
    this.title = data.title
    this.content = data.content
    // default image needed here
    this.img = data.img
    this.creatorId = data.creatorId
  }

  get Template() {
    return /* html */`
    
    `
  }
}
