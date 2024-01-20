import React from 'react';
import './Exercise.css'; // CSS file

const style_header = {
  color: 'white',
  backgroundColor: 'DodgerBlue',
  padding: '10px',
  fontFamily: 'Arial',
};

class Exercise3 extends React.Component {
  render() {
    return (
      <div>
        {/* part 1 */}
        <h1 style={{ ...style_header, color: 'red', backgroundColor: 'lightblue' }}>Styled Header</h1>
        <p>This is a Header</p>
        <a href="/">This is a Link</a>

        <form>
          <p>This is a Form</p>
          <label>
            Enter yor name:
            <input type="text" />
          </label>
          <button type="submit">Submit</button>
        </form>

        <p>This is an image</p>
        <img src="path/to/image.jpg" alt="Description" />

        <p>This is a List</p>
        <ul>
          <li>Coffe</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>

        {/* part 2 - styling using an object */}
        <h1 style={style_header}>Styled Header with Object</h1>
      </div>
    );
  }
}

export default Exercise3;
