import { Schema, model, models, SchemaTypes } from 'mongoose';

const messageSchema = new Schema({
  sender: {
    type: SchemaTypes.ObjectId,
    ref: 'User',
  },
  item: {
    type: SchemaTypes.ObjectId,
    ref: 'clothes',
  },
  owner: {
    type: SchemaTypes.ObjectId,
    ref: 'clothes',
  }, 
  returnDate: String,
  message: String,
  returnDate: String
});


const Message  = models.message || model('message', messageSchema );




export default Clothes;