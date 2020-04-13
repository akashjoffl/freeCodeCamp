function Bird() {
    let weight = 15;
    // private method bird object can use

    this.getWeight = function () {
        return weight;
        // public available method bird object can use
    }
}

let sparrow = new Bird();
// declaring sparrow contect

console.log(sparrow.getWeight());
// returns 15
