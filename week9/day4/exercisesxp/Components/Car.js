// #2
import React, { useState } from 'react';
import Garage from './Garage';

function Car({ carInfo }) {
  const color = useState("red");  // part 2 - #1

  return (
    <div>
        {/* #3; part 2 - #2 */}
      <h2>This car is {color} {carInfo.model}</h2> 
      {/* part 3 - #1-2  */}
      <Garage size="small" /> 
    </div>
  );
}

export default Car;
