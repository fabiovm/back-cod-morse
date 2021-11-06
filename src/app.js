const express = require('express');
const app = express();
const router = express.Router();
const cors = require('cors');

//Rotas
const index = require('./routes/index');
const norseRoute = require('./routes/norseRoute');

app.use(cors());
app.use('/', index);
app.use('/norse', norseRoute);
module.exports = app;