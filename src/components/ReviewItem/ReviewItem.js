import React from 'react';

const ReviewItem = ({value ,  handleRemoveProduct}) => {
    const {name , img , price , stock , seller , key,quantity} = value;

    return (
        <div className = "product">
               <div>

                        <img src={img} alt="logo"/>

               </div>

               <div className = "details">

                       <h4>{name}</h4>
                       <p><small>By : {seller}</small></p>
                       <p><small>Price : ${price}</small></p>
                       <p><small>Only {stock} is available. Order soon....</small></p>
                       <p><small>Quantity : {quantity}</small></p>
                       <button className = "main-btn" onClick = {()=> handleRemoveProduct(key)}>Remove Product</button>
               </div>
        </div>
    );
};

export default ReviewItem;