import { useDispatch } from "react-redux";
import { dataProducts } from "../../../Shop/dataProducts";
import { decreaseQuantity, increaseQuantity, removeItemFromCart } from "../../Redux/cartSlice";

export const CartItem = ({cartItem}) => {
    const dispatch = useDispatch();
    const items = dataProducts.find(item => item.id === cartItem.itemId);


    const handleIncrease = () => {
        dispatch(increaseQuantity({cartItemId: cartItem.id}));
    };

    const handleDecrease = () => {
        dispatch(decreaseQuantity({cartItemId: cartItem.id}));
    };


    return (
        <div className='cart-item'>
            <img className="cart-item-image" src={items.image} alt={items.title} />
            <div className="cart-item-details">
                <div>
                    <p className="cart-item-name">{items.title}</p> 
                </div>
               

                <div className="quantity-control">
                    <button className="quantity-btn-cart" onClick={handleDecrease} disabled={cartItem.quantity <= 1}>-</button>
                    <span className="cart-item-price"> Quantity: {cartItem.quantity}</span>
                    <button className="quantity-btn-cart" onClick={handleIncrease}>+</button>
                </div>

                <div>
                    <p className="cart-item-price">Total: $ {cartItem.totalPrice.toFixed(2)}</p>
                </div>
            </div>
            
            <button className="delete-from-cart-btn" onClick={() =>  dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>Delete</button>
        </div>
    )
}