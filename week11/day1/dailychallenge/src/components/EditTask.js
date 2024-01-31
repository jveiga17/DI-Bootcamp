import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../features/tasksSlice';

const EditTask = ({ task, selectedDay }) => {
  const [editedTaskText, setEditedTaskText] = useState(task.text);
  const dispatch = useDispatch();

  const handleEditTask = () => {
    dispatch(editTask({
      day: selectedDay,
      taskId: task.id,
      updatedTask: { ...task, text: editedTaskText },
    }));
  };

  return (
    <div>
      <input
        type="text"
        value={editedTaskText}
        onChange={(e) => setEditedTaskText(e.target.value)}
      />
      <button onClick={handleEditTask}>Save Changes</button>
    </div>
  );
};

export default EditTask;
