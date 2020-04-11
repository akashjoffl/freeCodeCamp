function getIndexToIns(arr, num) {
    arr.push(num);
    //console.log(arr);
    // adding num array element into arr array
    arr.sort(function (a, b) {
        return a - b
    });
    console.log(arr);
    // sorting array in order

    let indexArray = arr.indexOf(num)
    // finding and returning the index
    return indexArray;


}

console.log(getIndexToIns([5, 3, 20, 3], 5));
