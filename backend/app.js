const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/book-routes');
const cors = require('cors');
const app = express();

//Middlewares
app.use(express.json());
app.use(cors());
app.use('/books', router); //localhost:5000/books

//db connection
mongoose
  .connect(
    '' //add mongodb url here
  )
  .then(() => console.log('Connected to database'))
  .then(() => app.listen(5000))
  .catch((err) => console.log('An error occured>>>>>>>>>>', err));
