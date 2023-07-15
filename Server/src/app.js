const express = require('express')
const morgan = require('morgan')
const cors = require('cors');
const router = require('./routes/index');

const server = express();

server.use(cors())
server.use(morgan('dev'))

server.use(express.json())

server.use('/rickandmorty', router)

module.exports = server;