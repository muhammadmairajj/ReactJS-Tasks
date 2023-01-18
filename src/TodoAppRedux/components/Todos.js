import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateCheckbox } from "../redux/actions/actions";
import { Icon } from 'react-icons-kit';
import {trash} from 'react-icons-kit/feather/trash'
import {edit2} from 'react-icons-kit/feather/edit2'

function Todos({editFormVisibility, handleEditClick}) {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.TodoAppReducer);
  // console.log("todos ->>", todos);
  return todos.map((todo)=>(
    <div key={todo.id} className='todo-box'>
        <div className='content'>
            {editFormVisibility===false&&(
              <input type="checkbox" checked={todo.completed}
              onChange={()=>dispatch(updateCheckbox(todo.id))}></input>
            )}
            <p style={todo.completed===true?{textDecoration:'line-through'}:{textDecoration:'none'}}>
                {todo.todo}
            </p>
        </div>
        <div className='actions-box'>
              {editFormVisibility===false&&(
                <>
                  <span onClick={()=>handleEditClick(todo)}><Icon icon={edit2}/></span>
                  <span onClick={()=>dispatch(removeTodo(todo.id))}><Icon icon={trash}/></span>
                </>
              )}
        </div>
    </div>
  ))
}

export default Todos;
