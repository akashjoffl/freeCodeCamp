function bouncer(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        // listing all the inputs
        console.log(arr[i]);
        if (arr[i]) newArray.push(arr[i]);
        //if arr[1] is true push it to newArray or return
    }

    return newArray;
}

bouncer([7, "ate", "", false, 9]);
