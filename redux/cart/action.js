const { ADD_TO_CART } = require("./actionType")

const addToCart = (cartItem) => {
    return {
        type: ADD_TO_CART,
        payload: cartItem,
    }
}


export { addToCart }