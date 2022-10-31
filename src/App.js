import React from 'react';
import "./app.css"
import AboutUs from './component/AboutUs/AboutUs';
import Home from './component/Home/Home';
import Navbar from './component/Navbar/Navbar';

const App = () => {

  return (
  <div className='text-center'>
    <Navbar/>
    <Home/>
    <AboutUs/>
  </div>
  );
};

export default App;
