const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    user_name: String,
    password_hash: String,
});

module.exports = mongoose.model('User', UserSchema);