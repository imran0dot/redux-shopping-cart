import initialState from './initialState';
import { ADD_PRODUCT } from './actionTypes';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return [
                ...state,
                action.payload
            ]


        default:
            return state
    }
};

export default reducer;