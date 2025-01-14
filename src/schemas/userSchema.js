const config = require('../config');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Define the user schema
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
    role: {
        type: String,
        enum: ['student', 'tutor', 'teacher', 'manager'],
        required: true,
        default: 'student'
    }
}, {
    timestamps: true
});

// Hash the password before saving the user
userSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        try {
            const salt = await bcrypt.genSalt(config.auth.salt());
            this.password = await bcrypt.hash(this.password, salt);
        } catch (error) {
            return next(error);
        }
    }
    next();
});

// Hash the password before updating the user
userSchema.pre('findOneAndUpdate', async function(next) {
    if (this._update.password) {
        try {
            const salt = await bcrypt.genSalt(config.auth.salt());
            this._update.password = await bcrypt.hash(this._update.password, salt);
        } catch (error) {
            return next(error);
        }
    }
    next();
});

// Match password
userSchema.methods.matchPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

module.exports = userSchema;
