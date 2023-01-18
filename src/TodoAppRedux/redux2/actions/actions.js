import { ADD_TODO, DELETE_ALL_TODO, EDIT_TODO, REMOVE_TODO, UPDATE_CHECKBOX_TODO } from "../constant"

export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload
    }
}
export const edit_Todo = (payload) => {
    return {
        type: EDIT_TODO,
        payload
    }
}
export const removeTodo = (payload) => {
    return {
        type: REMOVE_TODO,
        payload
    }
}
export const deleteAll = () => {
    return {
        type: DELETE_ALL_TODO,
    }
}
export const updateCheckBox = (payload) => {
    return {
        type: UPDATE_CHECKBOX_TODO,
        payload
    }
}