import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Main from './Main';
import Shop from './Shop/Shop';
import Footer from './Footer/Footer';
import About from './About/About';

function App() {
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
            </div>
                    
          </nav>

          <Routes>
            <Route exact path='/' element={<Main/>}/>
            <Route exact path='/shop' element={<Shop/>}/>
            <Route exact path='/about' element={<About/>}/>

          </Routes>
        </Router>
      </div>

      <Footer/>
    </div>
    
  );
}

export default App;
