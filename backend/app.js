// mongodb password: KMkO6Ciy3CFgKrBa
// mongodb user: admin

const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/book-routes')

const app = express();

//Middlewares
app.use('/books', router) //localhost:5000/books

//db connection
mongoose
  .connect(
    'mongodb+srv://admin:KMkO6Ciy3CFgKrBa@cluster0.rsqjb.mongodb.net/bookStore?retryWrites=true&w=majority'
  )
  .then(() => console.log('Connected to database'))
  .then(() => app.listen(5000))
  .catch((err) => console.log('An error occured>>>>>>>>>>', err));
