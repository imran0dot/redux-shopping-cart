import { createStore } from 'redux';
import rootReducer from './rootReducer';
import reducer from './cart/reducer';

const store = createStore(reducer)

export default store;