function addTogether() {

  let firstArgument = arguments[0];


  if (arguments.length > 1) {
    let secondArgument = arguments[1];
    if (
      argumentCheck(firstArgument) !== undefined &&
      argumentCheck(secondArgument) !== undefined) {
      return firstArgument + secondArgument
    } else {
      return undefined;
    }
  } else if (arguments.length === 1) {
    if (argumentCheck(firstArgument) === undefined) {
      return undefined;
    } else {
      return function (secondArgument) {
        if (
          argumentCheck(firstArgument) !== undefined &&
          argumentCheck(secondArgument) !== undefined) {
          return firstArgument + secondArgument
        } else {
          return undefined;
        }
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

let result = addTogether(2);
console.log(result);