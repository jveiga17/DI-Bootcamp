// capitalise all words in array
function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
      if (Array.isArray(words) && words.every(word => typeof word === 'string')) {
        const uppercasedWords = words.map(word => word.toUpperCase());
        resolve(uppercasedWords);
      } else {
        reject("Array contains non-string elements");
      }
    });
  }
  
  // sort words if the array length > 4
  function sortWords(uppercasedWords) {
    return new Promise((resolve, reject) => {
      if (Array.isArray(uppercasedWords) && uppercasedWords.length > 4) {
        const sortedWords = uppercasedWords.sort();
        resolve(sortedWords);
      } else {
        reject("Array length is not bigger than 4");
      }
    });
  }
  
  // testing
  makeAllCaps([1, "pear", "banana"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch(error => console.log(error));
  
  makeAllCaps(["apple", "pear", "banana"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch(error => console.log(error));
  
  makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch(error => console.log(error));
  