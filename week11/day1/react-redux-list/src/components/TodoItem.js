import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../features/todoSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    // dispatch toggleTodo action with the todo's id
    dispatch(toggleTodo(todo.id));
  };

  const handleRemove = () => {
    // dispatch removeTodo action with the todo's id
    dispatch(removeTodo(todo.id));
  };

  return (
    <li>
      <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
      <span>{todo.text}</span>
      <button onClick={handleRemove}>Remove</button>
    </li>
  );
};

export default TodoItem;
