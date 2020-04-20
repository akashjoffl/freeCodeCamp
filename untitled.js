function checkPositive(arr) {
  // Only change code below this line
  let result = arr.some(function (value) {
    console.log(value)
    return value > 0;
  });
  return result;
  // Only change code above this line
}
console.log(checkPositive([1, 2, 3, -4, 5]));
