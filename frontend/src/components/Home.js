import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='mt-[60px] grid items-center justify-center'>
      <Link to={'/books/'}>
        <button className='bg-black px-10 py-5 text-white'>
          View all books
        </button>
      </Link>
    </div>
  );
}

export default Home;
