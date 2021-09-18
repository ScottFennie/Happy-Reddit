import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const CommentSchema = new Schema({
  postId: { type: mongoose.Schema.Types.ObjectId, required: true },
  content: { type: String, required: true, maxlength: 300 },
  creatorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Account' }

})

CommentSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})
