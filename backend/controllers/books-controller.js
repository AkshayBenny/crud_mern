const Book = require('../model/Book');

const getAllBooks = async (req, res, next) => {
  let books;
  try {
    books = await Book.find();
  } catch (err) {
    console.log(err);
  }

  if (!books) {
    return res.status(404).json({ message: 'No books found' });
  } else {
    res.status(200).json({ books });
  }
};


exports.getAllBooks = getAllBooks