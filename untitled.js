function myReplace(str, wordToSearchFor, wordToReplace) {
  let stringCollection = str.split(" ");

  const isWordCapitalized = (word) => {
    return word[0] === word[0].toUpperCase()
  }

    const capitalizeWord = (word) => {
      return wordToReplace[0].toUpperCase() + word.slice(1);
    }
    
    return stringCollection.map(individualWord => {
    if (individualWord === wordToSearchFor) {
      if (isWordCapitalized(individualWord)) {
        wordToReplace = capitalizeWord(wordToReplace); 
      };
      return wordToReplace;
     }
     return individualWord;
  }).join(" ");
  }

let result = myReplace("His name is Tom", "Tom", "john");

console.log(result);