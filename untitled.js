function myReplace(str, before, after) {
  let stringCollection = str.split(" ");
  //console.log(stringCollection);

  for (let i = 0; i < stringCollection.length; i++) {
    if (stringCollection[i] === before) {
      if (stringCollection[i][0] ===
        stringCollection[i][0].toUpperCase()) {
        after = after[0].toUpperCase() + after.slice(1)
      };
      stringCollection[i] = after;
    }
  }
  return stringCollection.join(" ");
}

let result = myReplace("His name is Tom", "Tom", "john");

console.log(result);