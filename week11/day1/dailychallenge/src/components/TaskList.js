import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

const TaskList = ({ selectedDay }) => {
  const tasks = useSelector(state => state.tasks.tasksByDay[selectedDay]) || [];

  return (
    <div>
      <h3>Tasks for {selectedDay}</h3>
      <ul>
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
