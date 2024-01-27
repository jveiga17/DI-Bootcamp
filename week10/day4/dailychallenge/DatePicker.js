import React, { useState } from 'react';
import { connect } from 'react-redux';

const DatePicker = ({ onSelectDay }) => {
  const [selectedDay, setSelectedDay] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDay(date);
    onSelectDay(date);
  };

  return (
    <div>
      <label>Select Day:</label>
      <input type="date" value={selectedDay.toISOString().split('T')[0]} onChange={(e) => handleDateChange(new Date(e.target.value))} />
    </div>
  );
};

export default connect(null, mapDispatchToProps)(DatePicker);
