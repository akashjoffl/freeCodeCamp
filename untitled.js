var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
    // Only change code below this line
    return arr.slice().sort();
    // Only change code above this line
}
console.log(nonMutatingSort(globalArray));
