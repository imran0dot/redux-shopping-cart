import { combineReducers } from "redux";
import reducer from "./items/reducer";

const rootReducer = combineReducers({
    productItems: reducer
})
export default rootReducer;