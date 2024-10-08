export const  ChangeQuantity = ({quantity, setQuantity}) => { 
    const handleIncrement = () => {
        const newAmount = quantity + 1;
        setQuantity(newAmount)
    }

    const handleDecrement = () => {
        if (quantity <= 1) return 
        const newAmount = quantity - 1;
        setQuantity(newAmount)
    }


    return (
        <div className="quantity-control">
            <button className="quantity-btn" onClick={() => handleDecrement()}>-</button>
            <span className="quantity-input"> {quantity} </span>
            <button className="quantity-btn" onClick={() => handleIncrement()}>+</button>

        </div>
    )
}