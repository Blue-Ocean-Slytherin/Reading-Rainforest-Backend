require("dotenv").config();
const path = require("path");
const controllers = require('./controllers.js');
const express = require("express");
const app = express();
const cors = require('cors');
const morgan = require('morgan');

const db = require("../db/schema.js");

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// Routes go here
app.get('/user/:userSub/books', controllers.getUserBooks)


app.listen(process.env.SERVER_PORT);
console.log(`Listening at http://localhost:${process.env.SERVER_PORT}`);