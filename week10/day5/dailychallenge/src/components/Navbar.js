import React from "react";

const Navbar = ({ score, topScore }) => {
  return (
    <nav>
      <h1>Super Game!</h1>
      <div>Current Score: {score}</div>
      <div>Top Score: {topScore}</div>
    </nav>
  );
};

export default Navbar;
