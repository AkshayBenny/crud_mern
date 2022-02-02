import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Book({ _id, name, author, description, price, image }) {
  const history = useNavigate();
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/books/${_id}`)
      .then((res) => res.data)
      .then(() => history('/'))
      .then(() => history('/books'));
  };

  return (
    <div>
      <div className='h-64 md:h-[400px] '>
        <img
          src={image}
          alt={name}
          className='h-full w-full object-cover object-center'
        />
      </div>
      <h3 className='mt-6 text-sm text-gray-500'>{name}</h3>
      <p className='text-base font-light text-gray-900'>By {author}</p>
      <p className='text-lg  font-semibold text-gray-900'>{price}$</p>
      <div className='grid grid-cols-2 gap-5 pt-10'>
        <div className='w-full'>
          <Link to={`/books/${_id}`}>
            <button className='w-full rounded bg-green-600 px-5 py-2 text-white hover:bg-green-900'>
              Update
            </button>
          </Link>
        </div>
        <div className='w-full'>
          <button
            onClick={deleteHandler}
            className='w-full rounded bg-red-500 px-5 py-2 text-white hover:bg-red-900'
          >
            Delete
          </button>
        </div>
      </div>
      {/* <div className='mt-3'>
        <Link to={`/books/${_id}`}>
          <button className='w-full rounded bg-amber-600 px-5 py-2 text-white hover:bg-amber-900'>
            View Book
          </button>
        </Link>
      </div> */}
    </div>
  );
}

export default Book;
