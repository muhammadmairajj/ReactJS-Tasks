import { ADD_TODO, DELETE_ALL_TODO, EDIT_TODO, REMOVE_TODO, UPDATE_CHECKBOX_TODO } from "../constant";

const initialState=[
    {id: 1, todo: 'Buy Laptop', completed: false},
    {id: 2, todo: 'Master Redux', completed: false},
    {id: 3, todo: 'Watering Plants', completed: true},
];

export const TodoAppReducer = (state=initialState, action) =>{
    switch(action.type) {
        case ADD_TODO:
            return [
                ...state,
                action.payload
            ]
        case REMOVE_TODO:
            const filteredData = state.filter((todo) => todo.id !== action.payload);
            return filteredData;
        case DELETE_ALL_TODO:
            return [];
        case EDIT_TODO:
            const data = action.payload;
            const updatedTodo=[];
            state.map((item) => {
                if(item.id === data.id) {
                    item.id = data.id;
                    item.todo = data.todo;
                    item.completed = data.completed;
                }
                updatedTodo.push(item);
            })
            return updatedTodo;
        case UPDATE_CHECKBOX_TODO:
            const updateCheckbox= [];
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

