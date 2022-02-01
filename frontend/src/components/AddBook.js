import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddBook() {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: '',
    author: '',
    description: '',
    price: '',
    image: '',
  });
  const [checked, setChecked] = useState(false);

  const sendRequest = async () => {
    await axios
      .post('http://localhost:5000/books', {
        name: String(inputs.name),
        author: String(inputs.author),
        description: String(inputs.description),
        price: Number(inputs.price),
        available: Boolean(checked),
        image: String(inputs.image),
      })
      .then((res) => res.data);
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history('/books'));
  };
  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col space-y-12 px-10 pt-10'
    >
      <h1 className='text-2xl font-extrabold text-gray-900'>Add New Book</h1>
      <div className='flex-row gap-10 space-y-12 md:flex md:space-y-0'>
        <input
          name='name'
          value={inputs.name}
          onChange={handleChange}
          className='w-full rounded border py-3 pl-4'
          type='text'
          placeholder='Enter name'
        />
        <input
          name='author'
          value={inputs.author}
          onChange={handleChange}
          className='w-full rounded border py-3 pl-4'
          type='text'
          placeholder='Enter author'
        />
      </div>

      <input
        name='price'
        value={inputs.price}
        onChange={handleChange}
        className='rounded border py-3 pl-4'
        type='text'
        placeholder='Enter the price'
      />
      <input
        name='image'
        value={inputs.image}
        onChange={handleChange}
        className='rounded border py-3 pl-4'
        type='text'
        placeholder='Enter the image url'
      />
      <textarea
        name='description'
        value={inputs.description}
        onChange={handleChange}
        className='rounded border py-3 pl-4'
        type='text'
        placeholder='Enter description'
      />
      <div className='flex items-center gap-2'>
        <label
          className='text-base font-light text-gray-900'
          htmlFor='availability'
        >
          Availability:
        </label>
        <input
          checked={checked}
          onChange={() => setChecked(!checked)}
          type='checkbox'
          name='availability'
        />
      </div>
      <button className='w-full rounded bg-teal-800 py-4 text-white hover:bg-emerald-900 md:ml-auto md:w-96'>
        Add Book
      </button>
    </form>
  );
}

export default AddBook;
