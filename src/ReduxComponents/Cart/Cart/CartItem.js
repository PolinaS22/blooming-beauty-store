import { useDispatch } from "react-redux";
import { dataProducts } from "../../../Shop/dataProducts";
import { removeItemFromCart } from "../../Redux/cartSlice";

export const CartItem = ({cartItem}) => {
    const dispatch = useDispatch();

    console.log(cartItem)

    const items = dataProducts.find(item => item.id === cartItem.itemId)

    return (
        <div>
            <p> {items.title} </p>

            <button onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>delete</button>
        </div>
    )
}