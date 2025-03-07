const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes');
dotenv.config();

connectToDb();

app.use(cors());
app.use(express.json());

app.use('/users', userRoutes);
module.exports = app;
