const config = require('../config')
const mongoose = require('mongoose');

const connectMongo = async () => {
    try {
        await mongoose.connect(config.database.connection_string, config.database.options);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection failed');
        console.error(error);
    }
};

module.exports = connectMongo;
