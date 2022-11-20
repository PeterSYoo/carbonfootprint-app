import { Schema, model, models, SchemaTypes } from 'mongoose';

const messagesSchema = new Schema({
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


const Messages  = models.message || model('messages', messagesSchema );




export default Clothes;