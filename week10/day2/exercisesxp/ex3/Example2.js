import React, { Component } from "react";

class Example2 extends Component {
  render() {
    const { Skills } = this.props;
    return (
      <div>
        <h2>Skills</h2>
        <div>
          <h3>Programming</h3>
          <ul>
            {Skills.Programming.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Design</h3>
          <ul>
            {Skills.Design.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Example2;
