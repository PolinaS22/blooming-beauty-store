import { useContext, useState } from "react"
import { ShopContext } from "../Context/ShopContext"
import { useParams } from "react-router-dom"
import { History } from "./History"
import { ChangeQuantity } from "../ReduxComponents/Cart/Cart/ChangeQuantity"
import { useDispatch } from "react-redux"
import { addItemToCart } from "../ReduxComponents/Redux/cartSlice"
import Discount from "../ReduxComponents/Cart/Cart/Discount"

export default function ItemPage(props) {
   const dispatch = useDispatch();

   const {dataProducts} = useContext(ShopContext)
   const {productId} = useParams();
   const product = dataProducts.find((e) => e.id === Number(productId))

   const [quantity, setQuantity] = useState(1);
   
   const [isAdded, setIsAdded] = useState(false)

   const handleAddToCart = ({product, quantity}) => {
    dispatch(addItemToCart({product, quantity}))
    setIsAdded(true)
   }

    return (
        <div>
        <div className="padding-box">
            <History title = {product.title}/>
            <div>
                <div className="product-cont">
                    <div className="product-display-left">
                        <img className="img-product-individual-page" src={product.image} alt='Product'/>
                    </div>
                    <div className="product-display-left">
                            <div>
                                <h4 className="product-title">{product.title}</h4>
                                <p className="product-price">$ {product.price}</p>
                            </div>   
                                <div>                                 
                                    <ChangeQuantity quantity={quantity} setQuantity={setQuantity} />
                                </div>

                                <div className="cont-add-btn">
                                    <button className="add-to-cart-btn" onClick={() => handleAddToCart({product, quantity})}>         
                                        { isAdded ? 'Added' : 'Add to Cart'  }
                                    </button>
                                </div>
                            </div>       
                </div>

                <div className="description-cont-ind-product">
                    <h5 className="description-title">Description:</h5>
                    <p>{product.description}</p>                        
                </div>
            </div>            
        </div>
         <Discount/>          
        </div>

    )
}