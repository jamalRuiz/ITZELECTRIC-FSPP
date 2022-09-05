// DEPENDENCIES

const express = require("express");
const cors = require("cors");

// CONFIGURATION
const app = express();

const electricController = require('./controllers/electricController.js')
// MIDDLEWARE
app.use(express.json())
app.use(cors());
app.use('/electric', electricController);
// ROUTES
app.get('/', (req, res) => {
    res.send("Welcome to ITZ ELECTRIC ⚡️ API!!")
})
app.get('*', (req, res) => {
    res.status(404).send('page not found')
})
// EXPORT
module.exports = app;
