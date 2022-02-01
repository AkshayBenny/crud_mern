const express = require('express');
const router = express.Router();
const Book = require('../model/Book');
const booksController = require('../controllers/books-controller');

//This route will provide all the books data
router.get('/', booksController.getAllBooks);

router.post('/', booksController.addBook);

module.exports = router;
