import initialState from './initialState'
const { ADD_TO_CART } = require("./actionType")

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_TO_CART:
            console.log(state);
            if (state.length > 0) {
               return state.map(item => {
                    if (item.id === action.payload.id) {
                        const cartQuantity = item?.cartQuantity ? item.cartQuantity + 1 : 1;
                        item.cartQuantity = cartQuantity;
                        return item
                    }
                    else return (
                        item,
                        action.payload
                    )
                })
            } return [
                ...state,
                action.payload
            ]

        default:
            return state
    }


}


export default reducer