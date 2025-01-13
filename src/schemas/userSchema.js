const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false,
        default: null
    },
    profile_picture: {
        type: String,
        required: false,
        default: 'assets/images/default-profile-picture.webp'
    },
    role: {
        type: String,
        required: true,
        default: 'student'
    }
}, {
    timestamps: true
});

module.exports = userSchema;
