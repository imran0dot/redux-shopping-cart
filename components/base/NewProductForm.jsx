'use client'
import { addNewProduct } from '@/redux/items/action';
import React from 'react';
import { useDispatch } from 'react-redux';

const NewProductForm = () => {
    const dispactch = useDispatch();

    const formHandler = (event) => {
        event.preventDefault();
        const form = event.target;

        const data = {
            name: form.inputName.value,
            category: form.inputCategory.value,
            image: form.inputImage.value,
            price: form.inputPrice.value,
            quentity: form.inputQuentity.value
        }

        dispactch(addNewProduct(data));
    }
    return (
        <div className="formContainer">
            <h4 className="formTitle">Add New Product</h4>

            <form
                className="space-y-4 text-[#534F4F]"
                id="lws-addProductForm"
                onSubmit={formHandler}
            >
                {/* <!-- product name --> */}
                <div className="space-y-2">
                    <label htmlFor="lws-inputName">Product Name</label>
                    <input className="addProductInput" id="lws-inputName" type="text" name='inputName' required />
                </div>
                {/* <!-- product category --> */}
                <div className="space-y-2">
                    <label htmlFor="lws-inputCategory">Category</label>
                    <input className="addProductInput" id="lws-inputCategory" type="text" name='inputCategory' required />
                </div>
                {/* <!-- product image url --> */}
                <div className="space-y-2">
                    <label htmlFor="lws-inputImage">Image Url</label>
                    <input className="addProductInput" id="lws-inputImage" type="text" name='inputImage' required />
                </div>
                {/* <!-- price & quantity container --> */}
                <div className="grid grid-cols-2 gap-8 pb-4">
                    {/* <!-- price --> */}
                    <div className="space-y-2">
                        <label htmlFor="ws-inputPrice">Price</label>
                        <input className="addProductInput" type="number" id="lws-inputPrice" name='inputPrice' required />
                    </div>
                    {/* <!-- quantity --> */}
                    <div className="space-y-2">
                        <label htmlFor="lws-inputQuantity">Quantity</label>
                        <input className="addProductInput" type="number" id="lws-inputQuantity" name='inputQuentity' required />
                    </div>
                </div>
                {/* <!-- submit button --> */}
                <button type="submit" id="lws-inputSubmit" className="submit">Add Product</button>
            </form>

        </div>
    );
};

export default NewProductForm;