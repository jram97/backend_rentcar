import mongoose, { Schema } from 'mongoose'

const imagesSchema = new Schema({
  name: {
    type: String
  },
  car: {
    type: Schema.ObjectId,
    ref: 'Cars',
    required: true
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

imagesSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      name: this.name,
      car: this.car.view(full),
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Images', imagesSchema)

export const schema = model.schema
export default model
