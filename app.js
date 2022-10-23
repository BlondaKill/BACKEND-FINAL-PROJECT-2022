const express = require('express');
const cors = require('cors');
const logger = require('morgan');



const app = express();

const storeRouter = require('./routes/store');
const { conect } = require('./db/db');

//CONFIGURACIONES
app.use(logger('dev'));
app.use(express.json());
app.use(cors());


app.use('/', storeRouter);
conect();


module.exports = app