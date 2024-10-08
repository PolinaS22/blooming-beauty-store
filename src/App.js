import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Main from './Main';
import Shop from './Shop/Shop';
import Footer from './Footer/Footer';
import About from './About/About';
import ItemPage from './Shop/ItemPage';
import Cart from './ReduxComponents/Cart/Cart/Cart';
import { useSelector } from 'react-redux';
import { getCartItems } from './ReduxComponents/Redux/cartSlice';


function App() {
  const cartItems = useSelector(getCartItems);     

  return (
    <div>
        <div className="Navbar">
        <Router>
          <nav className='padding-box'> 
            <div>
              <Link to='/' className='linkNav title-link'>Blooming Beauty</Link>             
            </div>
            <div className='link-left'>
              <Link to='/shop' className='linkNav'>Shop</Link>
              <Link to='/about' className='linkNav'>About</Link>
              <Link to='/cart' className='linkNav'>Cart ({cartItems.length})</Link>
            </div>                  
          </nav>

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

      <Footer/>
    </div>
    
  );
}

export default App;
