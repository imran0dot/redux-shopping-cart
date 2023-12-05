'use client'

import React from 'react';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const CartItems = () => {
    const cartItems = useSelector(state => state.cartItems);
    return (
        <div className="space-y-6">
            {
                cartItems.map(cartItem => <CartItem cartItem={cartItem} key={cartItem.id}/>)
            }
        </div>
    );
};

export default CartItems;