function sumFibs(num) {
  let fibonacciSequence = [0, 1];

  let counter = fibonacciSequence[fibonacciSequence.length - 2] +
    fibonacciSequence[fibonacciSequence.length - 1]
  while (counter <= num) {
    fibonacciSequence.push(counter)
    counter = fibonacciSequence[fibonacciSequence.length - 2] +
      fibonacciSequence[fibonacciSequence.length - 1]
  }

  let sumOfOddFibonacciNumbers = 0;

  fibonacciSequence.forEach(function (num) {
    if (num % 2 != 0) {
      // console.log(sumOfOddFibonacciNumbers);
      sumOfOddFibonacciNumbers += num;
      console.log(sumOfOddFibonacciNumbers)
    }
  })
  return sumOfOddFibonacciNumbers;
}

let result = sumFibs(10);
console.log(result);