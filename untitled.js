function uniteUnique(collection) {
  let finalCollection = [];
  let values = Object.values(arguments);  
  console.log(values); 
  for (let i = 0; i < values.length; i ++){
    for (let j = 0; j < values[i].length; j ++) {
      if(finalCollection.indexOf(values[i][j]) === -1) {
        finalCollection.push(values[i][j]);
      }
    }
  }
  return finalCollection;
}

let result = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
console.log(result);