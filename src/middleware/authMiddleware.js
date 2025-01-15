const config = require('../config');
const responses = require('../config/responses');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(responses.unauthorized.status).json(responses.unauthorized);
    }
    const decoded = jwt.verify(token, config.auth.secret);
    req.user = decoded;
    const user = await userModel.findById(decoded.id);
    if (!user) {
      return res.status(responses.unauthorized.status).json(responses.unauthorized);
    }
    next();
  } catch (error) {
    res.status(responses.unauthorized.status).json(responses.unauthorized);
  }
};

module.exports = authMiddleware;
