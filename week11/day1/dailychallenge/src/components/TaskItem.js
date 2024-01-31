import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../features/tasksSlice';
import EditTask from './EditTask';

const TaskItem = ({ task, selectedDay }) => {
  const [editing, setEditing] = useState(false);
  const dispatch = useDispatch();

  const handleDeleteTask = () => {
    dispatch(deleteTask({ day: selectedDay, taskId: task.id }));
  };

  return (
    <li>
      <span>{task.text}</span>
      <button onClick={() => setEditing(!editing)}>Edit</button>
      <button onClick={handleDeleteTask}>Delete</button>
      {editing && <EditTask task={task} selectedDay={selectedDay} />}
    </li>
  );
};

export default TaskItem;
