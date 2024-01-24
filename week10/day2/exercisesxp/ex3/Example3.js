import React, { Component } from "react";

class Example3 extends Component {
  render() {
    const { Experiences } = this.props;
    return (
      <div>
        <h2>Experiences</h2>
        {Experiences.map((experience) => (
          <div key={experience.id}>
            <h3>{experience.position}</h3>
            <p>{experience.company}, {experience.year}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;
