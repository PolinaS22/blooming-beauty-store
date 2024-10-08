import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { applyDiscount, getDiscountCode, getDiscountPersent, getTotalPrice } from "../../Redux/cartSlice";



export default function InputSale() {

    const totalPrice = useSelector(getTotalPrice);

    const dispatch = useDispatch();
    const discountCode = useSelector(getDiscountCode);
    const discountPercent = useSelector(getDiscountPersent); 

    const [inputDiscount, setInputDiscount] = useState('');
    const [discountAmount, setDiscountAmount] = useState(0);



    const formSubmit = (e) => {
        e.preventDefault();
    } 

    const handleApplyDiscount = () => {
        if (inputDiscount === discountCode && totalPrice >= 500) {
            dispatch(applyDiscount({ code: inputDiscount, percent: 15 }));

            const discount = totalPrice * ( discountPercent / 100 );
            setDiscountAmount(discount);

            Swal.fire({
                title: "Sweet!",
                text: "Congrats! You have received a 15% discount on your purchase.",
                imageUrl: "https://images.unsplash.com/photo-1716675209010-959f130eda04?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: "Custom image"
            });
            
        }
        else {
            Swal.fire({
                title: "Error :(",
                text: "Invalid discount code or your Glow Up Cart is under $500.",
                imageUrl: "https://images.unsplash.com/photo-1662453619322-5192d2708b35?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: "Custom image"
            });
        }

    }

    return (
        <div className="cont-check-out">
            <div>
                <form onSubmit={formSubmit}>
                    <input type="text" 
                        placeholder="Enter your discount code" 
                        value={ inputDiscount }  
                        onChange={(e) => setInputDiscount(e.target.value)}
                    />

                    <button 
                    className="apply-btn"
                    type="submit"
                    onClick={ handleApplyDiscount }
                    >
                        Apply
                    </button>   
                </form>

                <div>       
                    { discountCode && (
                        <div>
                            <p>Discount Amount: - ${ discountAmount.toFixed(2) }</p>
                        </div>
                    )}
                        
                    <div className="cart-items-amount-cont">
                        <p className="cart-total-price">Total Price: $
                            { totalPrice.toFixed(2)}
                        </p>
                    </div>
                    
                </div>
            
            </div>
        </div>
    )
}