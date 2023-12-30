function areAnagrams(str1, str2) {
    // removing whitespace and converting to lowercase for case-insensitive comparison
    const cleanStr1 = str1.replace(/\s/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/\s/g, '').toLowerCase();
  
    // checking if the sorted characters of both strings are equal
    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');
  
    return sortedStr1 === sortedStr2;  // the main comparison of the ex, between both given sentences
  }
  
  // Example usage:
  const result1 = areAnagrams("Astronomer", "Moon starer");
  console.log(result1); // output: true
  
  const result4 = areAnagrams("Hello", "World");
  console.log(result4); // output: false
  