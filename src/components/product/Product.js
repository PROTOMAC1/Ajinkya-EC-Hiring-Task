import React from 'react';
import ProductList from './productlist/ProductList';
import ProductUser from './productuser/ProductUser';

const Product = () => {
  return (
    <div>
        <ProductUser/>
      <ProductList/>
    </div>
  );
};

export default Product;
