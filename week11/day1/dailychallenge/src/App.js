import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import Calendar from './components/Calendar';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

function App() {
  const [selectedDay, setSelectedDay] = useState('');

  const handleSelectDate = (date) => {
    setSelectedDay(date);
  };

  return (
    <Provider store={store}>
      <div className="App">
        <Calendar onSelectDate={handleSelectDate} />
        {selectedDay && <TaskList selectedDay={selectedDay} />}
        {selectedDay && <AddTask selectedDay={selectedDay} />}
      </div>
    </Provider>
  );
}

export default App;
