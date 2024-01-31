import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import './App.css'; 

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AddTodo />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
