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
  checkoutDate: String
});


const Messages  = models.messages || model('messages', messagesSchema );




export default Messages;