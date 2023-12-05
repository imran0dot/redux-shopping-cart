import { combineReducers } from "redux";
import reducer from "./cart/reducer";

const rootReducer = () => combineReducers({
    cart: reducer
})
export default rootReducer;