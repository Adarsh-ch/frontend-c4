import React from 'react';
import BookList from '../components/BookList';
import Login from '../components/Login';
import Register from '../components/Register';

const Home = () => {
  return (
    <div className='home'>
      <h1>Welcome to the Online Bookstore</h1>
      <Register/>
     
    </div>
  );
};

export default Home;
