import React, { useEffect, useState } from "react";
import "./style.css";
import { Icon } from "react-icons-kit";

// icons themselves
import { plus } from "react-icons-kit/feather/plus";
import { edit2 } from "react-icons-kit/feather/edit2";
import { trash } from "react-icons-kit/feather/trash";
// We create a Todo App with all operations and value stored in local storage.

// Value Get from Local Storage:
function getValueFromLS() {
  const data = localStorage.getItem("Todos");
  if (data) {
    return JSON.parse(data);
  }
  return [];
}

function TodoApp() {
  // Todo Value state; means value stored in this state;
  const [todoValue, setTodoValue] = useState("");
  // Todo Array of Objects --> value get from localStorage so we create a function and passed of this state
  const [todos, setTodos] = useState(getValueFromLS);

  // handleSubmit;
  const handleSubmit = (e) => {
    e.preventDefault();

    // create Id for every todo value;
    const date = new Date();
    const time = date.getTime();

    const todoObject = {
      TodoValue: todoValue,   // todoValue --->Value which stored in TodoValue key
      complete: false,  // status
      ID: time,
    };

    // update todo state:
    setTodos([...todos, todoObject]);  // array object value sets
    // clearing Input Field
    setTodoValue("");
  };
  // Saving data to localStorage
  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(todos));
  }, [todos]); // useEffect will run whenever our todos state changes

  // delete data from local Storage:
  const handleDelete = (id) => {
    const filterData = todos.filter((todo) => {
      return todo.ID !== id;
    });
    setTodos(filterData);
  };
  // Edit data
  const [editForm, setEditForm] = useState(false);
  const [id, setId] = useState("");

  const handleEdit = (todo, index) => {
    setEditForm(true);
    setId(index);
    setTodoValue(todo.TodoValue);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const items = [...todos];
    const item = items[id];
    item.TodoValue = todoValue;
    items[id] = item;
    setTodos(items);
    setTodoValue("");
    setEditForm(false);
  };

  // Handle Check:
  // handle checkbox
  const handleCheckbox = (id) => {
    let todoArray = [];
    todos.forEach((todo) => {
      if (todo.ID === id) {
        if (todo.complete === false) {
          todo.complete = true;
        } else if (todo.complete === true) {
          todo.complete = false;
        }
      }
      todoArray.push(todo);
      // console.log(todoArray);
      setTodos(todoArray);
    });
  };
  return (
    <>
      {/* Form Component */}
      {editForm === false && (
        <div className="form-todo-box">
          <h1>Todo App:</h1>
          <form autoComplete="off" onSubmit={handleSubmit}>
            <div className="input-and-button">
              <input
                type="text"
                placeholder="Add Item"
                value={todoValue}
                onChange={(e) => setTodoValue(e.target.value)}
              />

              <div className="button">
                <button type="submit">
                  <Icon icon={plus} size={20} />
                </button>
              </div>
            </div>
          </form>
        </div>
      )}

      {/* Edit Form Component */}
      {editForm === true && (
        <div className="form-todo-box">
          <h1>Todo App:</h1>
          <form autoComplete="off" onSubmit={handleEditSubmit}>
            <div className="input-and-button">
              <input
                type="text"
                placeholder="Add Item"
                value={todoValue} 
                onChange={(e) => setTodoValue(e.target.value)}
              />

              <div className="button edit">
                <button type="submit">Update</button>
              </div>
            </div>
          </form>
        </div>
      )}

      {/* start of rendering todos if we have todos.length > 0 */}
      {todos.length > 0 && (
        <>
          {todos.map((data, index) => (
            <div className="todo" key={data.ID}>
              <div>
                {editForm === false && (
                  <input
                    type="checkbox"
                    checked={data.complete}
                    onChange={() => handleCheckbox(data.ID)}
                  />
                )}
                <span
                  style={
                    data.complete === true
                      ? { textDecoration: "line-through" }
                      : { textDecoration: "none" }
                  }
                >
                  {data.TodoValue}
                </span>
              </div>
              {editForm === false && (
                <div className="edit-and-delete-btn">
                  <div
                    style={{ marginRight: 7 + "px" }}
                    className="edit"
                    onClick={() => handleEdit(data, index)}
                  >
                    <Icon icon={edit2} size={20} />
                  </div>
                  <div className="trash" onClick={() => handleDelete(data.ID)}>
                    <Icon icon={trash} size={20} />
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* just after map closing brackets */}

          {/* delete all todos */}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button
              onClick={() => setTodos([])}
              className="delete-all btn btn-danger"
            >
              Delete All
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default TodoApp;
