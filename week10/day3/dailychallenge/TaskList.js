import React, { useContext } from 'react';
import { TaskContext, COMPLETE_TASK, REMOVE_TASK, EDIT_TASK, FILTER_TASKS } from './TaskContext';
import './App.css'

function TaskList() {
  const { tasks, dispatch } = useContext(TaskContext);

  const handleCompleteTask = (id) => {
    dispatch({ type: COMPLETE_TASK, id });
  };

  const handleRemoveTask = (id) => {
    dispatch({ type: REMOVE_TASK, id });
  };

  const handleEditTask = (id, text) => {
    const newText = prompt('Edit task:', text);
    if (newText !== null) {
      dispatch({ type: EDIT_TASK, id, text: newText });
    }
  };

  const handleFilterChange = (filter) => {
    dispatch({ type: FILTER_TASKS, filter });
  };

  return (
    <div>
      <div className='filter-div'>
        Filter:
        <button onClick={() => handleFilterChange('all')}>All</button>
        <button onClick={() => handleFilterChange('completed')}>Completed</button>
        <button onClick={() => handleFilterChange('active')}>Active</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleCompleteTask(task.id)}
            />
            {task.text}
            <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
            <button onClick={() => handleEditTask(task.id, task.text)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
