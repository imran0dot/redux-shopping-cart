'use client'
import React from 'react';
import Product from './Product';
import { useSelector } from 'react-redux';

const Products = () => {
    const cartItems = useSelector(state => state.productItems);
    return (
        <div>
            <div className="productContainer" id="lws-productContainer">
                {
                    cartItems?.map(cartItem => <Product cartItem={cartItem} key={cartItem?.id} />)
                }
            </div>
        </div>
    );
};

export default Products;