import { ADD_TODO, DELETE_ALL_TODO, EDIT_TODO, REMOVE_TODO, UPDATE_CHECKBOX_TODO } from "../constant";

const initialState = [
    {id: 1, todo: "Buying Laptops", completed: false},
    {id: 2, todo: "Master Redux", completed: false},
    {id: 3, todo: "Samsung Mobile", completed: false},
    {id: 4, todo: "Buying Book", completed: false},
]

export const TodoAppReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            return [
                ...state,
                action.payload
            ]
        case EDIT_TODO:
            const data = action.payload;
            const updateTodo=[];
            state.map((item) => {
                if(item.id===data.id) {
                    item.id = data.id;
                    item.todo = data.todo;
                    item.completed = data.completed
                }
                updateTodo.push(item);
            })
            return updateTodo;
        case REMOVE_TODO:
            const filterData = state.filter((todo) => todo.id!==action.payload);
            return filterData;
        case DELETE_ALL_TODO:
            return [];
        case UPDATE_CHECKBOX_TODO:
            const updateCheckbox=[];
            state.map((item) => {
                if(item.id === action.payload) {
                    item.completed = !item.completed;
                }
                updateCheckbox.push(item);
            })
            return updateCheckbox;
        default:
            return state;
    }
} 