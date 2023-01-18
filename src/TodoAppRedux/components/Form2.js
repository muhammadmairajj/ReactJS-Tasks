import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions/actions";
import { edit_Todo } from "../redux2/actions/actions";

function Form2(props) {
   const { editFormVisibility, editTodo, cancelUpdate } = props;
  const [addTodoValue, setAddTodoValue] = useState("");
  const [editTodoValue, setEditTodoValue] = useState("");
 

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    const time = date.getTime();

    const objTodo = {
      id: time,
      todo: addTodoValue,
      completed: false,
    };
    setAddTodoValue("");
    dispatch(addTodo(objTodo));
  };

  
  useEffect(() => {
    setEditTodoValue(editTodo.todo);
  }, [editTodo]);

  const editSubmit = (e) => {
    e.preventDefault();
    const objEditTodo = {
      id: editTodo.id,
      todo: editTodoValue,
      completed: false,
    };
    dispatch(edit_Todo(objEditTodo));
  };

  return (
    <>
     {editFormVisibility===false? (
        <form className="form-group todo-custom-form" onSubmit={handleSubmit}>
        <div className="input-and-btn">
          <label>Add your Todo item</label>
          <input
            type="text"
            placeholder="Add Todo"
            value={addTodoValue}
            onChange={(e) => setAddTodoValue(e.target.value)}
            className="form-control"
          />

          <button type="submit" className="btn btn-primary btn-md">
            Add
          </button>
        </div>
      </form>
     ): (
        <form className="form-group todo-custom-form" onSubmit={editSubmit}>
        <div className="input-and-btn">
          <label>Update your Todo item</label>
          <input
            type="text"
            placeholder="Add Todo"
            value={editTodoValue}
            onChange={(e) => setEditTodoValue(e.target.value)}
          />

          <button type="submit" className="btn btn-primary btn-md">
            Update
          </button>
        </div>
        <button type="button" onClick={cancelUpdate} className="btn btn-danger">Back</button>
      </form>
     )} 
    </>
  );
}

export default Form2;
