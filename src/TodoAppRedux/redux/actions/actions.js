import { ADD_TODO, REMOVE_TODO, EDIT_TODO, DELETE_ALL_TODO, UPDATE_CHECKBOX_TODO } from "../constant"

export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload
    }
}
export const removeTodo = (payload) => {
    return {
        type: REMOVE_TODO,
        payload
    }
}
export const deleteAllTodo = () => {
    return {
        type: DELETE_ALL_TODO
    }
}
export const updateTodo = (payload) => {
    return {
        type: EDIT_TODO,
        payload
    }
}
export const updateCheckbox = (payload) => {
    return {
        type: UPDATE_CHECKBOX_TODO,
        payload
    }
}
