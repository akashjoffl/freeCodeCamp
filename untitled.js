// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function (callback) {
    var newArray = [];
    // Only change code below this line
    for (let i = 0; i < this.length; i++) {
        //indivialElement = this[i];
        newArray.push(callback(this[i]));
    }
    //console.log(ind)
    // Only change code above this line
    return newArray;
};

//console.log(Array.prototype.myMap)

var new_s = s.myMap(function (item) {
    return item * 2;
});

console.log(new_s);
