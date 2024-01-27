import React from 'react';
import { connect } from 'react-redux';
import TodoList from './TodoList';
import AddTodo from './addTodo';
import { addTodo, toggleTodo, removeTodo } from './actions';

const TodoApp = ({ todos, addTodo, toggleTodo, removeTodo }) => {
  return (
    <div>
      <h2>Todo List</h2>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (text) => dispatch(addTodo(text)),
  toggleTodo: (id) => dispatch(toggleTodo(id)),
  removeTodo: (id) => dispatch(removeTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
