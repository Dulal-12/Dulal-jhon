import React, { useState } from 'react';
import { useEffect } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import happy from'../../images/giphy.gif';
import { useHistory } from 'react-router-dom';

const Review = () => {

    const [sproduct , setSproduct] = useState([]);
    const [orderPlace , SetOrderPlace] = useState(false);
    const history = useHistory();

    useEffect(()=> {
        const savedCart = getDatabaseCart();
        const productKey = Object.keys(savedCart);
     
        const reviewProducts = productKey.map(key=>{
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        })
        setSproduct(reviewProducts);
    }, [])
    
   // console.log(cart.length);

    const handleRemoveProduct = (key) =>{

        const newCart = sproduct.filter(pd => pd.key !== key);
        setSproduct(newCart);
        removeFromDatabaseCart(key);

    }

    const handlePlaceOrder = ()=>{
        setSproduct([]);
        SetOrderPlace(true);
        processOrder();
        history.push('/shipment');
    }
    return (
        <div className = "shop-container">
          
                    <div className="product-container">
                           {
                              sproduct.map(value=> <ReviewItem value={value}  handleRemoveProduct = { handleRemoveProduct} key={value.key}></ReviewItem>)
                           }
                           {
                               (orderPlace) ? <img src = {happy} alt=""/> : null
                           }
                    </div>

                    <div className="cart-conat">
                       <Cart sproduct = {sproduct} condition = {true} handlePlaceOrder = {handlePlaceOrder}/>
                    </div>
        </div>
    );
};

export default Review;