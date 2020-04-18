const squareList = (arr) => {
    // Only change code below this line
    let positiveIntegerSquared = arr.filter(num => {
        if (Number.isInteger(num) && num > 0) return num;
    }).map(num => { return num * num });
    // filterMethod to find the positive integers, and using the output to .map() to find the map();

    return positiveIntegerSquared;
    // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
