import { useState } from "react"
import { dataProducts } from "./dataProducts"


export default function ButtonsSelect() {
    
  


    const [products, setProducts] = useState(dataProducts);


    const selectedProducts = (category) => {
        const newProducts = dataProducts.filter(element => element.category.includes(category));
        setProducts(newProducts);
    }

    return (
        <div className='cont-btns'>

            <button className='btn-select' onClick={() =>setProducts(dataProducts)}>All</button>
            <button className='btn-select' onClick={() => selectedProducts('skincare')}>Skin care</button>
            <button className='btn-select' onClick={() => selectedProducts('makeup')}>Make up</button>
            <button className='btn-select' onClick={() => selectedProducts('perfume')}>Perfume</button>
            <button className='btn-select' onClick={() => selectedProducts('hair')}>For Hair</button>
            <button className='btn-select' onClick={() => selectedProducts('body')}>For Body</button>
            <button className='btn-select' onClick={() => selectedProducts('face')}>For Face</button>
        </div>
    )
}