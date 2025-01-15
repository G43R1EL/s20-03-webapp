const mongoose = require('mongoose');
const testSchema = require('../schemas/testSchema');

const testModel = mongoose.model('Test', testSchema);

module.exports = testModel;