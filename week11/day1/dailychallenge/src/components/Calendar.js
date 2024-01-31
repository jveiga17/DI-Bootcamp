import React, { useState } from 'react';

const Calendar = ({ onSelectDate }) => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (e) => {
    const date = e.target.value;
    setSelectedDate(date);
    onSelectDate(date);
  };

  return (
    <div>
      <label>Select Date: </label>
      <input type="date" value={selectedDate} onChange={handleDateChange} />
    </div>
  );
};

export default Calendar;
