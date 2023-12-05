import { combineReducers } from "redux";
import itemReducer from "./items/reducer";
import cartReduer from "./cart/reducer"

const rootReducer = combineReducers({
    productItems: itemReducer,
    cartItems: cartReduer
})
export default rootReducer;