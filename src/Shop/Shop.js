import Products from './Products';
import './Shop.css';
import Advertisement from './Advertisement';
import { AllCategories } from '../ReduxComponents/Filter/AllCategories';

export default function Shop() {
  
    return (
        <div>
            <Advertisement/>
            <AllCategories/>
            <Products />
        </div>
    )
}