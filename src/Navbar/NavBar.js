import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './../App.css';
import Main from '../Main';
import Shop from '../Shop/Shop';
import About from '../About/About';
import ItemPage from '../Shop/ItemPage';
import Cart from '../ReduxComponents/Cart/Cart/Cart';
import { NavbarElements } from './NavbarElements';

export const Navbar = () => {  
    return (
          <div className="Navbar">
          <Router>

            <NavbarElements/>
  
            <Routes>
              <Route exact path='/' element={<Main/>}/>
              <Route exact path='/shop' element={<Shop/>}/>
              <Route exact path='/about' element={<About/>}/>
  
  
             <Route path='/product' element={<ItemPage/>}>
              <Route path=':productId' element={<ItemPage/>}/>
             </Route>
  
             <Route exact path='/cart' element={<Cart/>}/>
  
            </Routes>
          </Router>
        </div>      
    );
  }
  
  
