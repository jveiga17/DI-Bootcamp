import React, { useState } from 'react';

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

  const handleVote = (index) => {
    // Create a copy of the languages array
    const updatedLanguages = [...languages];

    // Increment the votes for the selected language
    updatedLanguages[index].votes += 1;

    // Update the state with the new array
    setLanguages(updatedLanguages);
  };

  return (
    <div>
      <h1>Programming Language Voting App</h1>
      <ul>
        {languages.map((language, index) => (
          <li key={index}>
            <p>{language.name}</p>
            <button onClick={() => handleVote(index)}>Vote</button>
            <p>Votes: {language.votes}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
