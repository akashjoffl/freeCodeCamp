function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Only change code below this line
let myHouse = new House(5);
// creating new instance of the House constructor, 
//calling it myHouse

myHouse instanceof House;
// verifying that it is an instance of House