import { combineReducers } from "redux";
import { TodoAppReducer } from "./reducer";

const allReducer = combineReducers({
    TodoAppReducer
});

export default allReducer;