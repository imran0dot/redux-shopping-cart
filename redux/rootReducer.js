import { combineReducers } from "redux";
import reducer from "./cart/reducer";

const rootReducer = () => combineReducers({
    cartItems: reducer
})
export default rootReducer;