import React, { useState } from 'react';
import { useEffect } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {

    const [cart , setCart] = useState([]);

    useEffect(()=> {
        const savedCart = getDatabaseCart();
        const productKey = Object.keys(savedCart);
     
        const reviewProducts = productKey.map(key=>{
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        })

       setCart(reviewProducts);
    }, [])
   // console.log(cart.length);

    const handleRemoveProduct = (key) =>{

        const newCart = cart.filter(pd => pd.key !== key);
        setCart(newCart);
        removeFromDatabaseCart(key);

    }
    return (
        <div className = "shop-container">
          
                    <div className="product-container">
                           {
                              cart.map(value=> <ReviewItem value={value}  handleRemoveProduct = { handleRemoveProduct} key={value.key}></ReviewItem>)
                           }
                    </div>

                    <div className="cart-conat">
                      
                    </div>
        </div>
    );
};

export default Review;