import React from 'react';
import { useDispatch } from 'react-redux';
import { editTask, deleteTask } from '../features/taskSlice';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleEditTask = () => {
    dispatch(editTask({
      day: task.day,
      taskId: task.id,
      updatedTask: { ...task, completed: !task.completed },
    }));
  };

  const handleDeleteTask = () => {
    // Dispatch deleteTask action with the selected date and task id
    dispatch(deleteTask({ day: task.day, taskId: task.id }));
  };

  return (
    <li>
      <input type="checkbox" checked={task.completed} onChange={handleEditTask} />
      <span>{task.text}</span>
      <button onClick={handleDeleteTask}>Delete</button>
    </li>
  );
};

export default TaskItem;
