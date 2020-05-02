function palindrome(str) {
  let polishedString = str.replace(/\W+|_/g, "").toLowerCase();
  let reversedString = polishedString.split("").reverse().join("");

  return (polishedString === reversedString) ? true : false;
}



let result = palindrome("A man, a plan, a canal. Panama");
console.log(result);