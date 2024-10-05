import { useContext, useState } from "react"
import { ShopContext } from "../Context/ShopContext"
import { useParams } from "react-router-dom"
import { History } from "./History"
// import { AddToCart } from "../ReduxComponents/Cart/Cart/AddToCart"
import { ChangeQuantity } from "../ReduxComponents/Cart/Cart/ChangeQuantity"
import { useDispatch } from "react-redux"
import { addItemToCart } from "../ReduxComponents/Redux/cartSlice"

export default function ItemPage(props) {
   const dispatch = useDispatch();

   const {dataProducts} = useContext(ShopContext)
   const {productId} = useParams();
   const product = dataProducts.find((e) => e.id === Number(productId))

   const [quantity, setQuantity] = useState(1);
   

    return (
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
                                    {/* FIX */}
                                   
                                    <ChangeQuantity quantity={quantity} setQuantity={setQuantity} />
                                </div>

                                <div>
                                    {/* Если я оборачиваю ({product, quantity}) вот так, то в файле cartItem title - undefined*/}
                                <button onClick={() => dispatch(addItemToCart(product, quantity))}>         
                                    Add To Cart
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

    )
}