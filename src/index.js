// Restful API with Node & Express
const config = require('./config');
const responses = require('./config/responses');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
const authMiddleware = require('./middleware/authMiddleware');
const authRoute = require('./routes/authRoute');
const testRoute = require('./routes/testRoute');
const connectMongo = require('./config/database');

// Connect to MongoDB
connectMongo();

// Middleware
app.use(cors({ origin: '*', credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use('/auth', authRoute);
app.use('/test', authMiddleware, require('./routes/testRoute'));

// 404 - Not Found
app.get('*', (req, res) => {
    res.status(responses.notFound.status).json(responses.notFound);
})

// Start server
app.listen(config.server.port, () => {
  console.log(`Server running on http://${config.server.hostname}:${config.server.port}`);
});
