function mutation(arr) {
    let target = arr[0].toLowerCase();
    let test = arr[1].toLowerCase();
    // making everything lowerCase so it will be easier to compare tho.
    for (let i = 0; i < test.length; i++) {
        // listing all the letters of 2nd array element
        if (target.indexOf(test[i]) < 0)
            // if no elements (0) found; returning false; else true; 
            return false;
    }
    return true;
}

console.log(mutation(["hello", "hey"]));
