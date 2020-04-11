function Dog(name) {
  this.name = name;
}
let Bronie = new Dog('Bronie');
console.log(Bronie);

// Only change code below this line
function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) {
    return true;
  } else {
    return false;
  }
}

console.log(Bronie.constructor)