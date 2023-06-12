
import React, { useEffect, useState } from 'react';
import Navbar from './component/Navbar';
import { Routes, Route } from 'react-router-dom'
import Home from './component/Home';
import { Form } from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';

  

function App() {
  return (
    <>
      <Navbar  />
      <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/products' element={<Products />} />
          <Route exact path='/product' element={<Product />} />
      </Routes>
      
    </>
  ); 
}


export default App;
