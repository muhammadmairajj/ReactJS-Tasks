import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Forms from "./components/Forms";
import Todos from "./components/Todos";
import { deleteAllTodo } from "./redux/actions/actions";

function TodoAppRedux() {
  const [editFormVisibility, setEditFormVisibility] = useState(false);
  const [editTodo, setEditTodo] = useState('');

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.TodoAppReducer);

  const handleEditClick = (todo) => {
    setEditFormVisibility(true);
    setEditTodo(todo);

  }
  const cancelUpdate = () => {
    setEditFormVisibility(false);
  }
  return (
    <div className="wrapper">
      <h1>TodoApp Redux</h1>
  
      <Forms editFormVisibility={editFormVisibility} editTodo={editTodo} cancelUpdate={cancelUpdate} />
      <Todos handleEditClick={handleEditClick} editFormVisibility={editFormVisibility} />
      {todos.length > 1 && (
        <button className='btn btn-danger btn-md delete-all'
        onClick={()=>dispatch(deleteAllTodo())}>DELETE ALL</button>
      )}
    </div>
  )
}

export default TodoAppRedux;
