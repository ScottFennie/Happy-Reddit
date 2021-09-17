export class Comment {
  constructor(data) {
    this.postId = data.postId
    this.commentId = data.commentId
    this.subraggitId = data.subraggitId
    // this.title = data.title
    this.content = data.content
    this.creatorId = data.creatorId
  }

  get Template() {
    return /* html */`
    
    `
  }
}
