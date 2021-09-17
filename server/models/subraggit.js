import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const SubraggitSchema = new Schema({
  subraggitId: { type: mongoose.Schema.Types.ObjectId },
  title: { type: String, required: true, minlength: 1, maxlength: 25 },
  creatorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Account', required: true },
  img: { type: String },
  description: { type: String, maxlength: 500, required: true }
}, { timestamps: true, id: true, toJSON: { virtuals: true } })

SubraggitSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})
