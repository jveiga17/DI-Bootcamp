import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import superheroesData from "./superheroesData.json";
import "../App.css";

const SuperheroGame = () => {
  const [superheroes, setSuperheroes] = useState(
    superheroesData.superheroes
  );
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);

  useEffect(() => {
    shuffleCards();
  }, [score]);

  const shuffleCards = () => {
    // Create a copy of the original array to avoid mutating the original
    const shuffledCards = shuffle(superheroes);
    setSuperheroes(shuffledCards);
  };

  const shuffle = (array) => {
    // Fisher-Yates shuffle algorithm
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  const handleCardClick = (id) => {
    // Find the clicked superhero by id
    const clickedSuperhero = superheroes.find((superhero) => superhero.id === id);

    // Check if the superhero was already clicked
    if (clickedSuperhero.clicked) {
      // Handle the case where the superhero was clicked again (reset score)
      setScore(0);
      // Reset the clicked status for all superheroes
      const resetSuperheroes = superheroes.map((superhero) => ({
        ...superhero,
        clicked: false,
      }));
      setSuperheroes(resetSuperheroes);
    } else {
      // Update the clicked status for the clicked superhero
      const updatedSuperheroes = superheroes.map((superhero) =>
        superhero.id === id ? { ...superhero, clicked: true } : superhero
      );
      setSuperheroes(updatedSuperheroes);

      // Increment the score
      setScore((prevScore) => prevScore + 1);

      // Update the top score if the current score is higher
      setTopScore((prevTopScore) =>
        score + 1 > prevTopScore ? score + 1 : prevTopScore
      );
    }
  };

  return (
    <div>
      <Navbar score={score} topScore={topScore} />
      <div className="card-container">
        {superheroes.map((superhero) => (
          <Card
            key={superhero.id}
            id={superhero.id}
            name={superhero.name}
            image={superhero.image}
            occupation={superhero.occupation}
            onClick={handleCardClick}
          />
        ))}
      </div>
    </div>
  );
};

export default SuperheroGame;
