import Products from './Products';
import './Shop.css';
import Advertisement from './Advertisement';
import { AllCategories } from '../ReduxComponents/Filter/AllCategories';
import { dataProducts } from './dataProducts';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getSelectedCategory } from '../ReduxComponents/Redux/productsSlice';
import LoaderPage from '../Loader/LoaderPage';

export default function Shop() {
    const selectedCategory = useSelector(getSelectedCategory)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
     setIsLoaded(false);
     const imagesToLoad = dataProducts
     .filter(item => selectedCategory ==='ALL' || item.category.includes(selectedCategory))
     .map(item => item.image);


     const loadImages = async () => {
        const imagePromise = imagesToLoad.map(src => {

            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = src;
                img.onload = resolve;
                img.onerror = reject;
            });
        });

        try {
            await Promise.all(imagePromise);
            setIsLoaded(true);
          } catch (error) {
            console.error("Failed to load images", error);
            setIsLoaded(true); 
          }
        };
     loadImages();

  }, [selectedCategory])

  if (!isLoaded) {
    return <LoaderPage/>
  }

  
    return (
        <div>
            <Advertisement/>
            <AllCategories/>
            <Products selectedCategory={selectedCategory}/>
        </div>
    )
}