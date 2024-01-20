import logo from './logo.svg';
import React from 'react';
import './App.css';
import UserFavoriteAnimals from './UserFavoriteAnimals';
import Exercise3 from './exercise3';


function App() {
  // Ex 1 - defining variables before to avoid mo-undef issues
  const myelement = <h1>I Love JSX!</h1>;
  const sum = 5 + 5;

  // Ex 2 
  const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey'],
  };

  // Ex 3 comp
  const style_header = {
    color: 'white',
    backgroundColor: 'DodgerBlue',
    padding: '10px',
    fontFamily: 'Arial',
  };

  return (
    <div>
      {/* Ex 1 - step 1 */}
      <p>Hello World!</p>

      {/* Ex 1 - step 2 - render myelement */}
      {myelement}

      {/* Ex 1 - step 3 - render sum variable */}
      <p>React is {sum} times better with JSX</p>

      {/* Ex 2 - rendering names */}
      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>

      {/* Ex 2 - rendering fav animals comp and passing favAnimals as prop */}
      <UserFavoriteAnimals favAnimals={user.favAnimals} />

      {/* Ex 3  */}
      <Exercise3 />
    </div>
  );
}

export default App;
