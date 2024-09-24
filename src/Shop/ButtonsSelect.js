import { dataProducts } from './dataProducts';

export default function ButtonsSelect({ selectedProducts, setProducts}) {
    return (
        <div className='cont-btns'>
            <button className='btn-select' onClick={() =>setProducts(dataProducts)}>All</button>
            <button className='btn-select' onClick={() => selectedProducts('skincare')}>Skin care</button>
            <button className='btn-select' onClick={() => selectedProducts('makeup')}>Make up</button>
            <button className='btn-select' onClick={() => selectedProducts('parfume')}>Parfume</button>
            <button className='btn-select' onClick={() => selectedProducts('hair')}>For Hair</button>
            <button className='btn-select' onClick={() => selectedProducts('body')}>For Body</button>
            <button className='btn-select' onClick={() => selectedProducts('face')}>For Face</button>
        </div>
    )
}