
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
        <div>
            <button onClick={() => handleDecrement()}>-</button>
            <span> {quantity} </span>
            <button onClick={() => handleIncrement()}>+</button>

        </div>
    )
}