import { createStore } from 'redux';
// import allReducer from './TodoAppRedux/redux/reducers';
import rootReducer from "./TodoAppRedux/redux2/reducers";

const store = createStore(rootReducer);

export default store;