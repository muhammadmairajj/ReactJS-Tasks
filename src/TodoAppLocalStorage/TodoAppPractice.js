import React, { useEffect, useState } from "react";
import "./style2.css";

const getTodoValueFromLS = () => {
  const data = localStorage.getItem("Todos");
  if (data) {
    return JSON.parse(data);
  }
  return []; // else part
};

function TodoAppPractice() {
  // todo value state
  const [todoValue, setTodoValue] = useState("");
  // todo array of Objects
  const [todos, setTodos] = useState(getTodoValueFromLS());
  // todo edit:
  const [editForm, setEditForm] = useState(false);
  const [id, setId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(todoValue);

    // create Id for every todo;
    const date = new Date();
    const time = date.getTime();
    // console.log(time);
    // create a Object where data is stored
    const todoObject = {
      Id: time,
      completed: false,
      TodoValue: todoValue, // input data stored in TodoValue
    };
    setTodos([...todos, todoObject]);
    setTodoValue("");
    console.log(todoValue);
  };

  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(todos));
  }, [todos]);

  // Delete Todo Value:
  const handleDelete = (id) => {
    const filteredData = todos.filter((todo) => {
      return todo.Id !== id;
    });
    setTodos(filteredData);
  };

  // Edit Todo Value:
  const editTodo = (todo, index) => {
    setEditForm(true);
    setId(index);
    setTodoValue(todo.TodoValue);
    // console.log(todo.TodoValue);
  };
  const handleEdit = (e) => {
    e.preventDefault();
    const items = [...todos];
    const item = items[id];
    item.TodoValue = todoValue;
    items[id] = item;
    setTodos(items);
    setTodoValue("");
    setEditForm(false);
  };

  // handleCheck:
  const handleCheck = (id) => {
    let todoArray = [];
    todos.forEach((todo) => {
      if (todo.Id === id) {
        if (todo.completed === false) {
          todo.completed = true;
        } else if (todo.completed === true) {
          todo.completed = false;
        }
      }
      todoArray.push(todo);
      setTodos(todoArray);
    });
  };
  return (
    <>
      {editForm === false && (
        <div className="form-todo">
          <h1>TodoAppPractice</h1>
          <form autoComplete="off" onSubmit={handleSubmit}>
            <div className="input-and-button">
              <input
                type="text"
                placeholder="Add Item"
                value={todoValue}
                onChange={(e) => setTodoValue(e.target.value)}
              />
              <div className="button">
                <button className="btn btn-primary">Add</button>
              </div>
            </div>
          </form>
        </div>
      )}

      {editForm === true && (
        <div className="form-todo">
          <h1>TodoAppPractice</h1>
          <form autoComplete="off" onSubmit={handleEdit}>
            <div className="input-and-button">
              <input
                type="text"
                placeholder="Add Item"
                value={todoValue}
                onChange={(e) => setTodoValue(e.target.value)}
              />
              <div className="button">
                <button className="btn btn-primary">Update</button>
              </div>
            </div>
          </form>
        </div>
      )}
      {todos.length > 0 && (
        <>
          {todos.map((data, index) => (
            <div className="todo" key={data.Id}>
              <div>
                {editForm === false && (
                  <input
                    type="checkbox"
                    checked={data.completed}
                    onChange={() => handleCheck(data.Id)}
                  />
                )}
              </div>

              <span
                style={
                  data.completed === true
                    ? { textDecoration: "line-through" }
                    : { textDecoration: "none" }
                }
              >
                {data.TodoValue}
              </span>

              <div className="edit-and-delete">
                <div className="edit">
                  <button
                    className="btn btn-success"
                    style={{ marginRight: 7 + "px" }}
                    onClick={() => editTodo(data, index)}
                  >
                    Edit
                  </button>
                </div>
                <div className="trash">
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(data.Id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button className="btn btn-danger" onClick={() => setTodos([])}>
              Delete All
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default TodoAppPractice;
