import mongoose, { Schema } from 'mongoose'

const destinationSchema = new Schema({
  user: {
    type: Schema.ObjectId,
    ref: 'User',
    required: true
  },
  destination: {
    type: String
  },
  arrival: {
    type: String
  },
  destination_cor: {
    type: String
  },
  arrival_cor: {
    type: String
  },
  car: {
    type: Schema.ObjectId,
    ref: 'Cars',
    required: true
  },
  date: {
    type: String
  },
  status: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

destinationSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      user: this.user.view(full),
      destination: this.destination,
      destination_coordinates: this.destination_cor,
      arrival: this.arrival,
      arrival_coordinates: this.arrival_cor,
      car: this.car.view(full),
      date: this.date,
      status: this.status,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Destination', destinationSchema)

export const schema = model.schema
export default model
