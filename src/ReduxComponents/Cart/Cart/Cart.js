import { useSelector } from "react-redux"
import { getCartItems } from "../../Redux/cartSlice"
import { CartItem } from "./CartItem";


export default function Cart() {
   const cartItems = useSelector(getCartItems);
    
   const cartQuantity = cartItems.length;

    return (
        <div className="padding-box">
            <p>Cart Items: { cartQuantity }</p>

            
           {cartItems.map(cartItem => <CartItem key={cartItem.itemId} cartItem={cartItem}/>)}

           <p>Total Price: </p>
           <p>Including Tax: </p>
        </div>
    )
}