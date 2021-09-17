import { AuthController } from './Controllers/AuthController.js'
import { ValuesController } from './Controllers/ValuesController.js'
import { SubraggitsController } from './Controllers/SubraggitsController.js'

class App {
  authController = new AuthController();
  valuesController = new ValuesController();
  subraggitsController = new SubraggitsController()
}

// @ts-ignore
window.app = new App()
