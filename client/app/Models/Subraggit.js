export class Subraggit {
  constructor(data) {
    this.subraggitId = data.subraggitId
    this.title = data.title
    this.description = data.description
    this.rules = data.rules
    this.creatorId = data.creatorId
    this.img = data.img || 'https://c.tenor.com/zAL59Q3m-gUAAAAC/flaming-elmo-flaming-elmo-meme.gif'
  }

  get Template() {
    return /* html */`
        <div class="col-md-4 my-3 Subraggit">
      <div class="card">
        <img src="${this.img}" alt="Subraggit-image" class="rounded">
        <div class="card-body">
          <h5 class="d-flex justify-content-between">
            <span >${this.title}</span>
          </h5>
          <p>${this.description}</p>
        </div>
      </div>
    </div>
    `
  }
}

// <button class="btn btn-danger" onclick="app.commentsController.addComment('${this.id}')">Delete</button>
