import React from 'react';
import "./app.css"
import Home from './component/Home/Home';
import Navbar from './component/Navbar/Navbar';

const App = () => {

  return (
  <div className='text-center'>
    <Navbar/>
    <Home/>
  </div>
  );
};

export default App;
