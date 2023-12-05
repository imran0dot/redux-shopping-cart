const { ADD_PRODUCT } = require("./actionTypes")

const addNewProduct = (productData) => {
    return {
        type: ADD_PRODUCT,
        payload: productData
    }
}


export { addNewProduct }