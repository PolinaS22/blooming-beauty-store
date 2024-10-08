import { useSelector } from "react-redux"
import { getCartItems, getTotalPrice } from "../../Redux/cartSlice"
import { CartItem } from "./CartItem";
import { Link } from "react-router-dom";
import "./cart.css"
import InputSale from "./InputSale";

export default function Cart() {
   const cartItems = useSelector(getCartItems);
   const totalPrice = useSelector(getTotalPrice);
    
   const cartQuantity = cartItems.length;

   if (cartQuantity === 0) {
    return (
        <div>
            <div className="padding-box">
                <h4>Glow Up Cart</h4>
            </div>
            <div className="bg-image-container box-bg-img-cart">
                <div>
                    <p className="cart-total-items">Your cart is empty :( </p>
                </div>
                <div>
                    <button className="btn-link"><Link to='/shop' className="link-in-btn">View Shop</Link></button>
                </div>
            </div>
        </div>
    );
   }

    return (
        <div className="padding-box">
            <div>
               <h4>Glow Up Cart</h4> 
            </div>
            <div className="cart-items-amout-cont">
                <p className="cart-total-items"><i> Glow Up Products: { cartQuantity } </i></p>
            </div>

            <div>
                {
                cartItems.map(
                    cartItem => 
                        <CartItem 
                            key={cartItem.itemId} 
                            cartItem={cartItem}
                        />)
                }
            </div>
                        
            <div>
                <InputSale totalPrice={totalPrice}/>
            </div>           
     
        </div>
    )
}