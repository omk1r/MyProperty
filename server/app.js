const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes');
const propertyRoutes = require('./routes/property.routes');

connectToDb();

app.use(cors());
app.use(express.json());

app.use('/users', userRoutes);
app.use('/property', propertyRoutes);

module.exports = app;
