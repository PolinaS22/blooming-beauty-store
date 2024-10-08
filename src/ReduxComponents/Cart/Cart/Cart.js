import { useSelector } from "react-redux"
import { getCartItems } from "../../Redux/cartSlice"
import { CartItem } from "./CartItem";
import { Link } from "react-router-dom";
import "./cart.css"
import InputSale from "./InputSale";

export default function Cart() {
   const cartItems = useSelector(getCartItems);    
   const cartQuantity = cartItems.length;

   if (cartQuantity === 0) {
    return (
        <div>
            <div className="padding-box">
                <h4>Glow Up Cart</h4>
            </div>
            <div className="bg-image-container box-bg-img-cart">
                <p className="cart-total-items">Your cart is empty :( </p>
                <button className="btn-link"><Link to='/shop' className="link-in-btn">View Shop</Link></button>
            </div>
        </div>
    );
   }

    return (
        <div className="padding-box">
            <h4>Glow Up Cart</h4>
            <div className="cart-items-amout-cont">
                <p className="cart-total-items"><i> Glow Up Products: { cartQuantity } </i></p>
            </div>
            {
                cartItems.map(
                    cartItem => 
                        <CartItem 
                        key={cartItem.itemId} 
                        cartItem={cartItem}
                        />
                )
            }
            <InputSale/>
     </div>
    )
}