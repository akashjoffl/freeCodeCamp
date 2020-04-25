function fearNotLetter(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let startingPosition = alphabet.indexOf(str[0]);
  let focusedAlphabet = alphabet.slice(startingPosition);
  console.log(focusedAlphabet);

  for (let i = 0; i < str.length; i++) {
    if (str[i] != focusedAlphabet[i]) {
      return focusedAlphabet[i];
    }
  }
  return undefined;
}


let result = fearNotLetter("stvwx");
console.log(result);