const config = require('../config');
const mongoose = require('mongoose');
const userSchema = require('../schemas/userSchema');
const bcrypt = require('bcrypt');

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
