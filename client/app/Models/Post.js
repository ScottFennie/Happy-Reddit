export class Post {
  constructor(data) {
    this.postId = data.postId
    this.subraggitId = data.subraggitId
    this.title = data.title
    this.content = data.content
    // default image needed here
    this.img = data.img
    this.creatorId = data.creatorId
  }

  get Template() {
    return /* html */`
    <div class="row my-2">
      <h2>
        ${this.title}
      </h2>
      <div>
        ${this.content}
      </div>
    </div>
    `
  }
}
