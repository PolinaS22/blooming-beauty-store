import { useSelector } from "react-redux";
import { dataProducts } from "./dataProducts";
import Item from "./Item";
import { getSelectedCategory } from "../ReduxComponents/Redux/productsSlice";

export default function Products() {
  const selectedCategory = useSelector(getSelectedCategory)
  
    return (
        <div className="products-cont padding-box">
            {
             dataProducts
            .filter(item => {
                const categoryMatch = selectedCategory === 'ALL' || item.category.includes(selectedCategory);
                return categoryMatch;             
            })
            .map(item => {
                return <Item 
                key={item.id} 
                id={item.id} 
                title={item.title} 
                image={item.image} 
                price={item.price} 
                description={item.description}/>
            })            
            }
        </div>
    )
}