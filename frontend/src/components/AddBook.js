import React from 'react';

function AddBook() {
  return (
    <form className='flex flex-col space-y-12 px-10 pt-10'>
      <h1 className='text-2xl font-extrabold text-gray-900'>Add New Book</h1>
      <div className='flex-row gap-10 space-y-12 md:flex md:space-y-0'>
        <input
          className='w-full rounded border py-3 pl-4'
          type='text'
          placeholder='Enter name'
        />
        <input
          className='w-full rounded border py-3 pl-4'
          type='text'
          placeholder='Enter author'
        />
      </div>

      <input
        className='rounded border py-3 pl-4'
        type='text'
        placeholder='Enter the price'
      />
      <input
        className='rounded border py-3 pl-4'
        type='text'
        placeholder='Enter the image url'
      />
      <textarea
        className='rounded border py-3 pl-4'
        type='text'
        placeholder='Enter description'
      />
    </form>
  );
}

export default AddBook;
