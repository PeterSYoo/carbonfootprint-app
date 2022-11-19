import { Schema, model, models, SchemaTypes } from 'mongoose';

const clothesSchema = new Schema({
  user: {
    type: SchemaTypes.ObjectId,
    ref: 'User',
  },
  color: String,
  size: String,
  occasion: String,
  photos: [String],
  artcile: String,
  available: Boolean,
  description: String,
  price: Number
});


const Clothes  = models.clothes || model('clothes', clothesSchema );




export default Clothes;
