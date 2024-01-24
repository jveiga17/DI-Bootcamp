// App.js

import React, { useState } from 'react';
import FormComponent from './FormComponent';

const App = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    destination: '',
    lactoseFree: false,
    vegan: false,
    nutsFree: false,
  });

  // Function to handle changes in form inputs
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    // Update the state based on the type of input
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Define inline styles
  const containerStyle = {
    backgroundColor: 'brown',
    padding: '10px',
    color: 'white',
  };

  const formStyle = {
    backgroundColor: 'orange',
    padding: '20px',
    margin: '10px 0',
  };

  const resultStyle = {
    backgroundColor: 'green',
    padding: '20px',
    color: 'white',
    marginTop: '10px',
  };

  return (
    <div>
      <h1 style={containerStyle}>Sample form</h1>
      {/* Pass handleChange and formData to FormComponent */}
      <FormComponent handleChange={handleChange} formData={formData} formStyle={formStyle} />
      {/* Display form data in separate lines */}
      <div style={resultStyle}>
        <p>
          {`First Name: ${formData.firstName}`}
          <br />
          {`Last Name: ${formData.lastName}`}
          <br />
          {`Age: ${formData.age}`}
          <br />
          {`Gender: ${formData.gender}`}
          <br />
          {`Destination: ${formData.destination}`}
          <br />
          {`Lactose Free: ${formData.lactoseFree ? 'Yes' : 'No'}`}
          <br />
          {`Vegan: ${formData.vegan ? 'Yes' : 'No'}`}
          <br />
          {`Nuts Free: ${formData.nutsFree ? 'Yes' : 'No'}`}
        </p>
      </div>
    </div>
  );
};

export default App;
