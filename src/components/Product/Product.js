import React from 'react';
import './Product.css';
const Product = ({product , handleAddProduct}) => {
    //console.log(product);
    const {name , img , price , stock , seller , shipping} = product;

    return (
        <div className = "product">
               <div>

                        <img src={img} alt=""/>

               </div>

               <div className = "details">

                       <p>{name}</p>
                       <p><small>By : {seller}</small></p>
                       <p><small>Price : ${price}</small></p>
                       <p><small>Only {stock} is available. Order soon....</small></p>
                       <button className = "main-btn" onClick = {()=>handleAddProduct(product)}>Add To Cart</button>

               </div>
        </div>
    );
};

export default Product;
