const config = require('../config');
const responses = require('../config/responses');
const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');

// Create user controller
const userRegistration = async (req, res) => {
  try {
    const { username, password, role } = req.body;
    const user = await userModel.create({ username, password, role });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Login controller
const userLogin = async (req, res) => {
  try {
    const {username, password} = req.body;
    const user = await userModel.findOne({ username });
    // Check if the user exists
    if (!user) {
      return res.status(responses.unauthorized.status).json(responses.unauthorized);
    }
    // Check if the password is correct
    const validPassword = await user.matchPassword(password);
    if (!validPassword) {
      return res.status(responses.unauthorized.status).json(responses.unauthorized);
    }
    // Create and assign a token
    const token = jwt.sign({ id: user._id, role: user.role }, config.auth.secret, { expiresIn: config.auth.expiresIn });
    res.cookie('token', token, { httpOnly: true });
    // Success message with access token
    res.status(responses.success.status).json(responses.success.message);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
}

module.exports = {
    userRegistration,
    userLogin,
}
