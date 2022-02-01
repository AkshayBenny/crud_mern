import React from 'react';

function Book({ _id, name, author, description, price, image }) {
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
      <div className='flex items-center gap-5 pt-10'>
        <button className='rounded bg-green-600 px-5 py-2 text-white hover:bg-green-900'>
          Update
        </button>
        <button className='rounded bg-red-500 px-5 py-2 text-white hover:bg-red-900'>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Book;
