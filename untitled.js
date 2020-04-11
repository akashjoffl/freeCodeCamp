function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;
console.log(Dog.numLegs);
let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Only change code below this line

for (let propery in beagle) {
  if (beagle.hasOwnProperty(propery)) {
    ownProps.push(propery);
  } else {
    prototypeProps.push(propery);
  }
}