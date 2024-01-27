import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './store';

const TaskManagement = () => {
  const dispatch = useDispatch();
  const [taskTitle, setTaskTitle] = useState('');

  const handleAddTask = () => {
    dispatch(addTask({ day: 'defaultDay', task: { id: Date.now(), title: taskTitle } }));
    setTaskTitle('');
  };

  return (
    <div>
      <h2>Add Task</h2>
      <input type="text" value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskManagement;
