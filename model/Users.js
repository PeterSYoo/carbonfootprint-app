import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  username: String,
  name: String,
  email: String,
  image: String,
  password: String,
  cityState: String,
});

const Users = models.user || model('user', userSchema);

export default Users;
