import { AuthController } from './Controllers/AuthController.js'
import { ValuesController } from './Controllers/ValuesController.js'
import { SubraggitsController } from './Controllers/SubraggitsController.js'
import { PostsController } from './Controllers/PostsController.js'
import { CommentsController } from './Controllers/CommentsController.js'

class App {
  authController = new AuthController();
  valuesController = new ValuesController();
  subraggitsController = new SubraggitsController();
  postsController = new PostsController();
  commentsController = new CommentsController();
}

// @ts-ignore
window.app = new App()
