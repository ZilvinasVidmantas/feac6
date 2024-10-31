const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
require('dotenv').config();
const { categoriesRouter } = require('./categories');
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(morgan('dev'));
app.use('/api/categories', categoriesRouter);

mongoose.connect(process.env.DB_CONNECTION)
  .then(() => {
    app.listen(process.env.API_PORT, () => {
      console.log(`Server is running on ${process.env.API_PROTOCOL}://${process.env.API_HOST}:${process.env.API_PORT}`);
    })
  })
  .catch((err) => {
    console.log('Error connecting to MongoDB', err);
  });
