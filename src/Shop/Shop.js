import { useState } from 'react';
import ButtonsSelect from './ButtonsSelect';
import Products from './Products';
import './Shop.css';
import { dataProducts } from './dataProducts';
import Advertisement from './Advertisement';

export default function Shop() {

    const [products, setProducts] = useState(dataProducts);

    const selectedProducts = (searchName) => {
        const newProducts = dataProducts.filter(element => element.searchName.includes(searchName));
        setProducts(newProducts);
    }

    return (
        <div>
            <Advertisement/>
            <ButtonsSelect selectedProducts={ selectedProducts } setProducts={ setProducts }/>
            <Products products={ products }/>
        </div>
    )
}