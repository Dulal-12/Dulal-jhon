import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
    const {productKey} = useParams();
    //console.log(productKey);
     const product = fakeData.find(pd => pd.key === productKey);
    return (
        <div>
          <Product product={product} condition = {true}></Product>
        </div>
    );
};

export default ProductDetail;