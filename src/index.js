// Restful API with Node & Express
const config = require('./config');
const responses = require('./config/responses');
const express = require('express');
const cors = require('cors');
const app = express();
const authRoute = require('./routes/authRoute');
const connectMongo = require('./config/database');

// Connect to MongoDB
connectMongo();

// Middleware
app.use(cors({ origin: '*', credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/auth', authRoute);

// 404 - Not Found
app.get('*', (req, res) => {
    res.status(responses.notFound.status).json(responses.notFound);
})

// Start server
app.listen(config.server.port, () => {
  console.log(`Server running on http://${config.server.hostname}:${config.server.port}`);
});
