const mongoose = require('mongoose');

const AuthenticationSchema = new mongoose.Schema({
  user_id: String,
  token: String,
  expiration_date: String
});

module.exports = mongoose.model('Authentication', AuthenticationSchema);
