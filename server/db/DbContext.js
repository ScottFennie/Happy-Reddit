import mongoose from 'mongoose'
import { Value as ValueSchema } from '../models/Value'
import { AccountSchema } from '../models/Account'
import { SubraggitSchema } from '../models/subraggit'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Subraggits = mongoose.model('Subraggit', SubraggitSchema)
}

export const dbContext = new DbContext()
