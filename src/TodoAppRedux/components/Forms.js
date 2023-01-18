import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from '../redux/actions/actions';

function Forms(props) {
    const { editFormVisibility, editTodo, cancelUpdate } = props;

    const [todoValue, setTodoValue] = useState('');
    const [editTodoValue, setEditTodoValue] = useState('');

    const dispatch = useDispatch();
    const handleSubmit=(e)=>{
        e.preventDefault();

        const date = new Date();
        const time = date.getTime();

        const objTodo = {
            todo: todoValue,
            id: time,
            completed: false
        }
        setTodoValue('');
        dispatch(addTodo(objTodo));
    }

    useEffect(() => {
        setEditTodoValue(editTodo.todo);
    }, [editTodo]);

    const editSubmit = (e) => {
        e.preventDefault();
        const objEditTodo = {
            id: editTodo.id,
            completed: false,
            todo: editTodoValue
        }
        dispatch(updateTodo(objEditTodo));
    }
  return (
    <div>
        {editFormVisibility===false ? (
            <form className='form-group custom-form' onSubmit={handleSubmit}>
            <div className='input-and-btn'>
                <label>Add your Items</label>
                <input type="text" className='form-control' placeholder='Add Item'
                value={todoValue} onChange={(e)=>setTodoValue(e.target.value)} />
                <button type="submit" className='btn btn-primary btn-md'>Add</button>
            </div>
        </form>
        ) : (
            <form className='form-group custom-form' onSubmit={editSubmit}>
            <div>
                <label>Update your Item</label>
                <input type="text" className='form-control'
                value={editTodoValue} onChange={(e)=>setEditTodoValue(e.target.value)} />
                <button type="submit" className='btn btn-secondary btn-md'>Update</button>
            </div>
                <button type="button" className='btn btn-primary btn-md back-btn' onClick={cancelUpdate}>Back</button>
        </form>
        )}
    </div>
  )
}

export default Forms