const mongoose = require('mongoose');
const userSchema = require('../schemas/userSchema');

// Define the user model
const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
