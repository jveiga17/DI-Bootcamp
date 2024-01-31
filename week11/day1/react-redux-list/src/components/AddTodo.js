import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todoSlice';
import '../App.css'; 

const AddTodo = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  const handleAddTodo = () => {
    dispatch(addTodo({
      id: Date.now(),
      text: input,
      completed: false,
    }));
    setInput('');
  };

  return (
    <div className="add-todo-container">
      <input type="text" value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default AddTodo;
