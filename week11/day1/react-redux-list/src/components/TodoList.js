import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import '../App.css'; 

const TodoList = () => {
  const todos = useSelector(state => state.todos.todos);

  return (
    <div className="todo-list-container">
      <h2>Todo List</h2>
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
