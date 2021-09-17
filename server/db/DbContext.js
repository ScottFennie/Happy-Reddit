import mongoose from 'mongoose'
import { Value as ValueSchema } from '../models/Value'
import { AccountSchema } from '../models/Account'
import { SubraggitSchema } from '../models/subraggit'
import { PostSchema } from '../models/Post'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Subraggits = mongoose.model('Subraggit', SubraggitSchema)

  Posts = mongoose.model('Post', PostSchema)
}

export const dbContext = new DbContext()
