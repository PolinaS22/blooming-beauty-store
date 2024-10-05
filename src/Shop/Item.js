import { Link } from "react-router-dom";

export default function Item(props) {

    return (
        <div className="item-cont">
            <Link to={`/product/${props.id}`} style={{ textDecoration: 'none', color:'black' }}> 
                <img className="product-image" src={ props.image } alt='product'/>
                <p>{ props.title }</p>
                <p>$ { props.price }</p>     
            </Link>
                
        </div>
    )
}