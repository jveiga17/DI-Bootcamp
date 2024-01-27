import React from 'react';
import { connect } from 'react-redux';

const TaskDisplay = ({ tasks }) => {
  return (
    <div>
      <h2>Tasks for the selected day</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} - <button>Edit</button> <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  tasks: state[ownProps.selectedDay.toISOString().split('T')[0]] || [],
});

export default connect(mapStateToProps)(TaskDisplay);
