export class Subraggit {
  constructor(data) {
    this.subraggitId = data.id
    this.title = data.title
    this.description = data.description
    this.rules = data.rules
    this.creatorId = data.creatorId
    this.img = data.img
  }

  get Template() {
    return /* html */`
        <div class="subraggit">
      <div class="card">
        <img src="${this.img}" class="rounded">
        <div class="card-body">
          <h5 class="d-flex justify-content-between">
            <span >${this.title}</span>
          </h5>
          <p>${this.description}</p>
          <form class="" id="post-form" onsubmit="app.postsController.createPost('${this.subraggitId}')">
        <div class="form-group">
          <label for="title"></label>
          <input type="text" class="form-group" name="title" id="post-title" placeholder="title">
        </div>
        <div class="form-group">
          <label for="description"></label>
          <input type="text" class="form-group" name="content" id="post-content" placeholder="content">
        </div>
        <div class="form-group">
          <label for="img"></label>
          <input type="url" class="form-group" name="img" id="post-img" placeholder="img url">
        </div>
        <div class="button-group my-3">
          <button type="submit" class="btn btn-primary">submit</button>
          <button type="reset" class="btn btn-danger">clear</button>
        </div>
      </form>
      <div class="container" id='${this.subraggitId}'>
      </div>
          <button class="btn btn-danger" onclick="app.subraggitsController.deleteSubraggit('${this.subraggitId}')">Delete</button>
        </div>
      </div>
    </div>
    `
  }

  get Template2() {
    return /* html */`
        <li class="list-group-item nav-link selectable" onclick="app.subraggitsController._drawSubraggit()">
              ${this.title}
            </li>
    `
  }
}

// <button class="btn btn-danger" onclick="app.commentsController.addComment('${this.id}')">Delete</button>
