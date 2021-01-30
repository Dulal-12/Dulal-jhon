import React from 'react';
import './Product.css';
import {Link }from 'react-router-dom';
const Product = ({product , handleAddProduct , condition}) => {
    //console.log(product);
    const {name , img , price , stock , seller , shipping , key} = product;

    return (
        <div className = "product">
               <div>

                        <img src={img} alt=""/>

               </div>

               <div className = "details">

                       <h4> <Link to = {"/product/"+key}>{name}</Link></h4>
                       <p><small>By : {seller}</small></p>
                       <p><small>Price : ${price}</small></p>
                       <p><small>Only {stock} is available. Order soon....</small></p>
                       {(condition) ? null : <button className = "main-btn" onClick = {()=>handleAddProduct(product)}>Add To Cart</button>
}
               </div>
        </div>
    );
};

export default Product;
