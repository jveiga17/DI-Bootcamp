import React from 'react';
import { TaskProvider } from './TaskContext';
import TaskAdder from './TaskAdder';
import TaskList from './TaskList';

function App() {
  return (
    <div className='App'>
      <TaskProvider>
        <h1>Task Manager</h1>
        <TaskAdder />
        <TaskList />
      </TaskProvider>
    </div>
  );
}

export default App;