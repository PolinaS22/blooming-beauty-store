import { useDispatch, useSelector } from "react-redux"
import { filterCategory, getSelectedCategory } from "../Redux/productsSlice";

export const Filter = ({category}) => {
    const dispatch = useDispatch();
    const selectedCategory = useSelector(getSelectedCategory)

    return (
        <div>
            <button 
             className={ category === selectedCategory ? 'categoryBtnSelected btn-select' : 'btn-select' }
             onClick={() => dispatch(filterCategory(category))}>
                {category.toUpperCase()}
            </button>
        </div>
    )
}