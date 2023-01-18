import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Form2 from './components/Form2'
import Todo2 from './components/Todo2'
import { deleteAll } from './redux2/actions/actions';

        
function TodoAppRedux2() {
    const [editFormVisibility, setEditFormVisibility] = useState(false);
    const [editTodo, setEditTodo] = useState("");

    const dispatch = useDispatch();
    const todos = useSelector((state) => state.TodoAppReducer);

    const handleEditClick = (todo) => {
        setEditFormVisibility(true);
        setEditTodo(todo);
    };

    const cancelUpdate=() => {
        setEditFormVisibility(false);
    }
  return (
    <div className='todo-wrapper'>
    <br /><br />
        <h1 className='text-center'>Todo App Redux</h1>
        <Form2 editFormVisibility={editFormVisibility} editTodo={editTodo} cancelUpdate={cancelUpdate} />
        <Todo2 handleEditClick={handleEditClick} editFormVisibility={editFormVisibility} />
        <br /><br />
        {todos.length > 1 && (
        <button className='btn btn-danger btn-md delete-all'
        onClick={()=>dispatch(deleteAll())}>DELETE ALL</button>
      )}
    </div>
  )
}

export default TodoAppRedux2