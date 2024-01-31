import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import DatePicker from './components/DatePicker';
import TaskList from './components/TaskList';

function App() {
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <Provider store={store}>
      <div className="App">
        <DatePicker setSelectedDate={setSelectedDate} />
        <TaskList selectedDate={selectedDate} />
      </div>
    </Provider>
  );
}

export default App;
