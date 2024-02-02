import React from 'react';
import { useSelector } from 'react-redux';
import { selectTasksByCategory } from '../redux/selectors/taskSelectors';

const TaskList = ({ selectedCategory }) => {
  const tasks = useSelector((state) => selectTasksByCategory(state, selectedCategory));

  return (
    <div>
      <h2>Task List - {selectedCategory}</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.name} - {task.completed ? 'Completed' : 'Not Completed'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
