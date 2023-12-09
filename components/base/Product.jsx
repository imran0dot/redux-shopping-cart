import { addToCart } from '@/redux/cart/action';
import React from 'react';
import { useDispatch } from 'react-redux';

const Product = ({ cartItem }) => {
    const { id, name, category, price, quantity, image } = cartItem;
    const dispatch = useDispatch();

    const addToCartBtnHandler = () => {
        dispatch(addToCart(cartItem, id));
    }
    return (
        <div className="lws-productCard">
            <img className="lws-productImage" src={image} alt="product" />
            <div className="p-4 space-y-2">
                <h4 className="lws-productName">{name}</h4>
                <p className="lws-productCategory">{category}</p>
                <div className="flex items-center justify-between pb-2">
                    <p className="productPrice">BDT <span className="lws-price">{price}</span></p>
                    <p className="productQuantity">QTY <span className="lws-quantity">{quantity}</span></p>
                </div>
                <button className="lws-btnAddToCart" onClick={addToCartBtnHandler}>Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;