import React, { useState } from 'react';
import quotes from './QuotesDatabase';
import './App.css';


function App() {
  const [quote, setQuote] = useState(getRandomQuote());
  const [colors, setColors] = useState(getRandomColors());

  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }

  function getRandomColors() {
    const randomColor = () => Math.floor(Math.random() * 256);
    const randomRGB = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;

    return {
      backgroundColor: randomRGB,
      quoteColor: randomRGB,
      buttonColor: randomRGB,
    };
  }

  const handleNewQuote = () => {
    let newQuote;
    do {
      newQuote = getRandomQuote();
    } while (newQuote === quote);

    setQuote(newQuote);
    setColors(getRandomColors());
  };

  return (
    <div className="App" style={{ ...colors }}>
      <div id="quote-box">
        <h1 id="text">{quote.quote}</h1>
        <p id="author">- {quote.author}</p>
        <button id="new-quote" onClick={handleNewQuote} style={{ backgroundColor: colors.buttonColor }}>
          New Quote
        </button>
      </div>
    </div>
  );
}

export default App;
