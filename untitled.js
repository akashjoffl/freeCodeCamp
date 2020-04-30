function addTogether() {

  let firstArgument = arguments[0];

  if (arguments.length > 1) {
    let secondArgument = arguments[1];
    return checkArgumentsIfValid(firstArgument, secondArgument);

  } else if (arguments.length === 1) {
    if (argumentCheck(firstArgument) === undefined) {
      return undefined;
    } else {
      return function (secondArgument) {
        return checkArgumentsIfValid(firstArgument, secondArgument)
      }
    }
  }
}

function argumentCheck(argument) {
  if (typeof argument === 'number') {
    return argument;
  } else {
    return undefined;
  }
}

function checkArgumentsIfValid(first, second) {
  if (
    argumentCheck(first) !== undefined &&
    argumentCheck(second) !== undefined) {
    return first + second
  }
}

let sumThreeAnd = addTogether(3);
console.log(sumThreeAnd(7));