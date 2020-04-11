function chunkArrayInGroups(arr, size) {

    let result = [];
    // creating an empty array to store the chunk
    for (let i = 0; i < arr.length; i += size) {
        console.log(arr[i]);
        result.push(arr.slice(i, i + size));
    }
    return result;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
