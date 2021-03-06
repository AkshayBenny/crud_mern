const Book = require('../model/Book');
//get book or books, add book, update book etc functions will be handled by this controller
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

const addBook = async (req, res, next) => {
  const { name, author, description, price, available, image } = req.body;
  let book;
  try {
    book = new Book({
      name,
      author,
      description,
      price,
      available,
      image,
    });
    await book.save(); //>>>>>>>>>This line will save the book data to the database<<<<<<<<
  } catch (err) {
    console.log(err);
  }

  if (!book) {
    return res.status(500).json({ message: 'Unable to add new book' });
  }
  return res.status(201).json({ book });
};

const getById = async (req, res, next) => {
  const id = req.params.id; //the "id" in the line should be the same as the "id" in /:id. If it is /:bookId then over here it should be req.params.bookId
  let book;
  try {
    book = await Book.findById(id);
  } catch (err) {
    console.log(err);
  }

  if (!book) {
    return res.status(404).json({ message: 'No book found' });
  } else {
    return res.status(200).json({ book });
  }
};

const updateBook = async (req, res, next) => {
  const id = req.params.id;
  const { name, author, description, price, available, image } = req.body;
  let book;
  try {
    book = await Book.findByIdAndUpdate(id, {
      name,
      author,
      description,
      price,
      available,
      image,
    });
    await book.save();
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(500).json({ message: 'Unable to update by this id' });
  } else {
    return res.status(200).json({ book });
  }
};

const deleteBook = async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(404).json({ message: 'Unable to delete by this id' });
  }
  return res.status(200).json({ message: 'Book deleted successfully' });
};

//exports
exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getById = getById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;
