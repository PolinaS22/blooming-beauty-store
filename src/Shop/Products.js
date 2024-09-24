export default function Products({ products }) {
    return (
        <div className="products-cont padding-box">
            {products.map((product => {
                const { id, title, price, image } = product;
                return (
                    <div className="item-cont" key={ id }>
                        <img className="product-image" src={ image } alt='product'/>
                        <p>{ title }</p>
                        <p>$ { price }</p>
                    </div>
                )
            }))}
        </div>
    )
}