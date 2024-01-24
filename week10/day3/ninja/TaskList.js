import React, { useContext } from 'react';
import { TaskContext, COMPLETE_TASK, REMOVE_TASK } from './TaskContext';

function TaskList() {
    const { tasks, dispatch } = useContext(TaskContext);

    const handleCompleteTask = (id) => {
        dispatch({ type: COMPLETE_TASK, id });
    };

    const handleRemoveTask = (id) => {
        dispatch({ type: REMOVE_TASK, id });
    };

    return (
        <div>
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
              </li>
            ))}
          </ul>
        </div>
      );
}

export default TaskList;