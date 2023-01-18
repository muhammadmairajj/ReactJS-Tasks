import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCheckBox, removeTodo } from "../redux2/actions/actions";
import { Icon } from 'react-icons-kit';
import {trash} from 'react-icons-kit/feather/trash'
import {edit2} from 'react-icons-kit/feather/edit2'

// we will get all data from redux store using map function:
function Todo2(props) {
  const { editFormVisibility, handleEditClick } = props;
  // dispatch to action
  const dispatch = useDispatch();
  // useSelector used for data get from store in component.
  const todos = useSelector((state) => state.TodoAppReducer);
  return (
    <>
      {todos.map((todo) => {
        return (
          <div className="todo-box2" key={todo.id}>
            <div className="content">
              {editFormVisibility === false && (
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => dispatch(updateCheckBox(todo.id))}
                />
              )}
              <p
                style={
                  todo.completed === true
                    ? { textDecoration: "line-through" }
                    : { textDecoration: "none" }
                }
              >
                {todo.todo}
              </p>
              </div>
              <div className="action-box">
                {editFormVisibility === false && (
                    <>
                  <span onClick={()=>handleEditClick(todo)}><Icon icon={edit2}/></span>
                  <span onClick={()=>dispatch(removeTodo(todo.id))}><Icon icon={trash}/></span>
                </>
                )}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Todo2;
