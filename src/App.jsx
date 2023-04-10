import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Header></Header>
      <div  className='md:min-h-[calc(100vh-379px)]'>
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
      
      
    </div>
  );
};

export default App;