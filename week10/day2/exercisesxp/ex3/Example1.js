import React, { Component } from "react";

class Example1 extends Component {
  render() {
    const { SocialMedias } = this.props;
    return (
      <div>
        <h2>Social Media</h2>
        <ul>
          {SocialMedias.map((media, index) => (
            <li key={index}>{media}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Example1;
