import React from 'react';
import Car from './Components/Car';
import Events from './Components/Events';
import Phone from './Components/Phone';
import Color from './Components/Color';

function App() {
  const carInfo = { name: "Ford", model: "Mustang" };

  return (
    <div>
      {/* ex1 */}
      <Car carInfo={carInfo} />

      {/* ex2 */}
      <Events />

      {/* ex3 */}
      <Phone />

      {/* ex4 */}
      <Color />
    </div>
  );
}

export default App;
