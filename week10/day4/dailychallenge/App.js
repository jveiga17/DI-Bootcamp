import React, { useState } from 'react';
import DatePicker from './DatePicker';
import TaskDisplay from './TaskDisplay';
import TaskManagement from './TaskManag';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  const [selectedDay, setSelectedDay] = useState(new Date());

  const handleSelectDay = (day) => {
    setSelectedDay(day);
  };

  return (
    <Provider store={store}>
      <div>
        <h1>Simple Task Planner</h1>
        <DatePicker onSelectDay={handleSelectDay} />
        <TaskDisplay selectedDay={selectedDay} />
        <TaskManagement selectedDay={selectedDay} />
      </div>
    </Provider>
  );
}

export default App;
