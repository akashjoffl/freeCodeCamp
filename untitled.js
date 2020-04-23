function whatIsInAName(collections, source) {
  var matchingResult = [];
  // Only change code below this line
  collections.forEach(collection => {
   console.log(collection)
    let index = 0;
    for (let key in source) {
    //  console.log(collection[key]) //122 un 122
      if (collection[key] === source[key]) {
        index += 1;
      }
      if (index === Object.keys(source).length) {
        matchingResult.push(collection);
      }
    }
  })
  // Only change code above this line
  return matchingResult;
}

let result = whatIsInAName([
  { "apple": 1, "bat": 2 }, 
  { "bat": 2 }, 
  { "apple": 1, "bat": 2, "cookie": 2 }
    ], 
  { "apple": 1, "bat": 2 })

console.log(result);
