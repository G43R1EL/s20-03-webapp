const responses = require('../config/responses');
const testModel = require('../models/testModel');

const createTest = async (req, res) => {
  try {
    const { comment } = req.body;
    const test = await testModel.create({ comment, user: req.user.id });
    res.status(201).json(test);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

const commentsTest = async (req, res) => {
  try {
    const tests = await testModel.find().populate('user', 'username');
    res.status(200).json(tests);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
    createTest,
    commentsTest
}
