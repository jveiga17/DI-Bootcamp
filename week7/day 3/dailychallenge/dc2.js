const morseJSON = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`;
  
  // convert morse JSON string to a js object
  function toJs() {
    return new Promise((resolve, reject) => {
      const morseObject = JSON.parse(morseJSON);
      if (Object.keys(morseObject).length === 0) {
        reject("Morse object is empty");
      } else {
        resolve(morseObject);
      }
    });
  }
  
  // translate to morse code
  function toMorse(morseJS) {
    return new Promise((resolve, reject) => {
      const userInput = prompt("Enter a word or sentence:");
      if (!userInput) {
        reject("Input is empty");
      } else {
        const morseTranslation = [];
        for (const char of userInput.toLowerCase()) {
          if (morseJS[char]) {
            morseTranslation.push(morseJS[char]);
          } else {
            reject(`Character "${char}" not found in Morse object`);
          }
        }
        resolve(morseTranslation);
      }
    });
  }
  
  // join morse code and display on the DOM
  function joinWords(morseTranslation) {
    const morseString = morseTranslation.join(" ");
    document.body.innerHTML = `<p>${morseString}</p>`;
  }
  
  // chaining the three functions
  toJs()
    .then(morseJS => toMorse(morseJS))
    .then(morseTranslation => joinWords(morseTranslation))
    .catch(error => console.log(error));
  