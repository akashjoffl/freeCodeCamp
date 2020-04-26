

function sumFibs(num) {
  let fibonacciSequence = [0, 1];
  let sumOfOddFibonacciNumbers = 1;
  let counter = iterateFibonacciSequence(counter);

  function iterateFibonacciSequence() {
    return fibonacciSequence[fibonacciSequence.length - 2] +
      fibonacciSequence[fibonacciSequence.length - 1]
  }
  function isOdd(counter) { return counter % 2 != 0 }
  while (counter <= num) {
    fibonacciSequence.push(counter);
    if (isOdd(counter)) { sumOfOddFibonacciNumbers += counter; }
    counter = iterateFibonacciSequence(counter);
  }
  return sumOfOddFibonacciNumbers;
}

let result = sumFibs(10);
console.log(result);