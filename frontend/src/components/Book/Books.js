import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Book from './Book';

const URL = 'http://localhost:5000/books';

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function Books() {
  const [books, setBooks] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);
  return (
    <div className='px-5 md:px-20'>
      <h2 className='text-2xl font-extrabold text-gray-900'>Browse Books</h2>

      <div className='mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0'>
        {books &&
          books.map((book, index) => (
            <div
              key={index}
              className='group  cursor-pointer group-hover:border-2 '
            >
              <Book
                _id={book._id}
                name={book.name}
                author={book.author}
                description={book.description}
                price={book.price}
                image={book.image}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Books;
