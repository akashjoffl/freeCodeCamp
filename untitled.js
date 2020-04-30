function truthCheck(collection, pre) {
  let result = true;
  for (let i = 0; i < collection.length; i += 1) {
    // console.log(collection[i][pre]);
    if (collection[i][pre] === undefined ||
      collection[i][pre] === 0 ||
      collection[i][pre] === null ||
      collection[i][pre] === "" ||
      Number.isNaN(collection[i][pre]) // you pass the element as argument
    ) {
      result = false;
    }
  }
  return result;
}

let finalAnswer = truthCheck([{ "single": "double" }, { "single": NaN }], "single")

console.log(finalAnswer);