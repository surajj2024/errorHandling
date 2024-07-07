const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  email: String,
  password: String,
  contact: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;