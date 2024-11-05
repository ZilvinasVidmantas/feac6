const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
require('dotenv').config();
const cors = require('cors');
const { categoriesRouter } = require('./routes/categories-router');
const { connectToDb, PORT } = require('./db');

app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(morgan('dev'));
app.use('/api/categories', categoriesRouter);

connectToDb()
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${process.env.PROTOCOL}://${process.env.HOST}:${PORT}`)))
  .catch((err) => console.error('Failed to connect to the database', err));