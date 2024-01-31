import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/taskSlice';

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const dispatch = useDispatch();

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleAddTask = () => {
    // Dispatch addTask action with the selected date and a new task
    dispatch(addTask({
      day: selectedDate,
      task: { id: Date.now(), text: 'New Task', completed: false },
    }));
  };

  return (
    <div>
      <label>Select Date: </label>
      <input type="date" value={selectedDate} onChange={handleDateChange} />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default DatePicker;
