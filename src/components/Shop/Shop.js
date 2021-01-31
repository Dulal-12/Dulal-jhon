import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { addToDatabaseCart, getDatabaseCart} from '../../utilities/databaseManager'
import { useEffect } from 'react';
const Shop = () => {
  
    const first10 = fakeData.slice(0,10);
    const [products , setProducts] = useState([...first10]);
   //console.log(fakeData.length);
     const [sproduct , setSproduct] = useState([]);


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

   const handleAddProduct = (product) =>{

                         const products = sproduct.find(pd => pd.key === product.key);
                         if(products){
                               const count = products.quantity + 1;
                               products.quantity = count;
                               const other = sproduct.filter(pd => pd.key !== product.key);
                               setSproduct([...other , products]);
                         }
                         else{
                            
                               product.quantity = 1;
                               setSproduct([...sproduct ,  product]);
                         }
                       
                        
                         addToDatabaseCart(product.key , product.quantity);

   }
   
    return (
        <div className = "shop-container">
          
                    <div className="product-container">
                           {
                               products.map(product => <Product product={product} handleAddProduct = {handleAddProduct} key={product.key}></Product>)
                           }
                    </div>

                    <div className="cart-conat">
                            <Cart sproduct = {sproduct}></Cart>
                    </div>
        </div>
    );
};

export default Shop;