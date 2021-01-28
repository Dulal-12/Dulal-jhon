import React from 'react';

const Cart = ({sproduct}) => {

    const totalPrice = sproduct.reduce((ential,product) =>  ential + product.price,0);
    const tex = Math.floor((totalPrice*5)/100);
    const shippingCost = sproduct.reduce((cost,product)=> cost + product.shipping , 0);
    
    return (
        <div>
            <h4>Order summary</h4>
            <p>Order list : {sproduct.length}</p>
            <p>Shipping Cost : {shippingCost}</p>
            <p>Tax  : {tex}</p>
            <p>Total Price : {Math.round(totalPrice + shippingCost + tex)}</p>
        </div>
    );
};

export default Cart;