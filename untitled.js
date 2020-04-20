function sumAll(arr) {
  let minimumNumber = Math.min(arr[0], arr[1]);
  let maximumNumber = Math.max(arr[0], arr[1]);
  let result = 0;
  for (let i = minimumNumber; i <= maximumNumber; i++) {
    result += i;
  }
  return result;
}

console.log(sumAll([1, 4]));
