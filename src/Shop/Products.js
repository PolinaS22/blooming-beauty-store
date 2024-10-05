import { useSelector } from "react-redux";
import { dataProducts } from "./dataProducts";
import Item from "./Item";
import { getSelectedCategory } from "../ReduxComponents/Redux/productsSlice";

export default function Products() {

  const selectedCategory = useSelector(getSelectedCategory)

    return (
        <div className="products-cont padding-box">

            {dataProducts
            .filter(item => {
                if (selectedCategory === 'ALL') return true
                return selectedCategory === item.category;
            })
            .map((item, i) => {
                return <Item key={i} id={item.id} title={item.title} image={item.image} price={item.price} description={item.description}/>
            })}

        </div>
    )
}