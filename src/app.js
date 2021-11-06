const express = require('express');
const app = express();
const router = express.Router();

//Rotas
const index = require('./routes/index');
const norseRoute = require('./routes/norseRoute');

app.use('/', index);
app.use('/norse', norseRoute);
module.exports = app;