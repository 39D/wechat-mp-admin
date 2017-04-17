const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');

const config = require('../config');
const route = require('./route')

const app = express();

app.disable('x-powered-by');
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());

app.use('/', route);

module.exports = exports = app;

