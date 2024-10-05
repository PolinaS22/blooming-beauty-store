import { useDispatch } from "react-redux"
import { filterCategory } from "../Redux/productsSlice";

export const Filter = ({category}) => {
    const dispatch = useDispatch();

    return (
        <div>
            <button  className='btn-select'  onClick={() => dispatch(filterCategory(category))}>
                {category.toUpperCase()}
            </button>
        </div>
    )
}