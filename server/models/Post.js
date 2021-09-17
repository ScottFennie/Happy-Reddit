import mongoose from 'mongoose'
import { subraggitService } from '../services/SubraggitService'
const Schema = mongoose.Schema

export const PostSchema = new Schema({
  subraggitId: { type: mongoose.Schema.Types.ObjectId, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true, maxlength: 300 },
  img: { type: String, required: true },
  creatorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Account' }

})

PostSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})
