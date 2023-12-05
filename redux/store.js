import { createStore } from 'redux';
import rootReducer from './rootReducer';
import reducer from './items/reducer';

const store = createStore(rootReducer)

export default store;