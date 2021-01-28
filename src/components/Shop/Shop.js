import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
  
    const first10 = fakeData.slice(0,10);
    const [products , setProducts] = useState([...first10]);
   //console.log(fakeData.length);
     const [sproduct , setSproduct] = useState([]);

   const handleAddProduct = (product) =>{

                         setSproduct([...sproduct , product])

   }
   
    return (
        <div className = "shop-container">
          
                    <div className="product-container">
                           {
                               products.map(product => <Product product={product} handleAddProduct = {handleAddProduct}></Product>)
                           }
                    </div>

                    <div className="cart-conat">
                            <Cart sproduct = {sproduct}></Cart>
                    </div>
        </div>
    );
};

export default Shop;