import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasksSlice';

const AddTask = ({ selectedDay }) => {
  const [newTaskText, setNewTaskText] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    dispatch(addTask({
      day: selectedDay,
      task: { id: Date.now(), text: newTaskText, completed: false },
    }));
    setNewTaskText('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="New Task"
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
