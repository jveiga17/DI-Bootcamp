import React from 'react';

const FormComponent = ({ handleChange, formData }) => {
  return (
    <form>
      <label>
        First Name:
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
      </label>
      <br />
      <label>
        Last Name:
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
      </label>
      <br />
      <label>
        Age:
        <input type="text" name="age" value={formData.age} onChange={handleChange} />
      </label>
      <br />
      <label>
        Gender:
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === 'male'}
            onChange={handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === 'female'}
            onChange={handleChange}
          />
          Female
        </label>
      </label>
      <br />
      <label>
        Destination:
        <select name="destination" value={formData.destination} onChange={handleChange}>
          <option value="">Select destination</option>
          <option value="Brazil">Brazil</option>
          <option value="Japan">Japan</option>
          <option value="Israel">Israel</option>
        </select>
      </label>
      <br />
      <label>
        Lactose Free:
        <input
          type="checkbox"
          name="lactoseFree"
          checked={formData.lactoseFree}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Vegan:
        <input type="checkbox" name="vegan" checked={formData.vegan} onChange={handleChange} />
      </label>
      <br />
      <label>
        Nuts Free:
        <input type="checkbox" name="nutsFree" checked={formData.nutsFree} onChange={handleChange} />
      </label>
      <br />
    </form>
  );
};

export default FormComponent;
