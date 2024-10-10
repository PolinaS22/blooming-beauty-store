import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { getCartItems } from '../ReduxComponents/Redux/cartSlice';

export const NavbarElements = () => {
    const cartItems = useSelector(getCartItems);     

    return (
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
    )
}