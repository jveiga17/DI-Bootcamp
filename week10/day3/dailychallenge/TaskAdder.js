import React, { useContext, useState } from 'react';
import { TaskContext, ADD_TASK } from './TaskContext';
import './App.css'

function TaskAdder() {
    const { dispatch } = useContext(TaskContext);
    const [taskText, setTaskText] = useState("");

    const handleAddTask = () => {
        if(taskText.trim() === "") return;
        dispatch({ type: ADD_TASK, text: taskText});
        setTaskText("");
    };
    
    return (
        <div className='input-div'>
          <input
            type="text"
            placeholder="Add your new task!"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
          />
          <button className='task-button' onClick={handleAddTask}>Add Task</button>
        </div>
      );
    }
    
export default TaskAdder;