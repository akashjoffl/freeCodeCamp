function Cat (name) {
  this.name = name
}

Cat.prototype = {
  constructor: Cat
}

console.log(Cat())

function Bear (name) {
  this.name = name
}

Bear.prototype = {
  constructor: Bear
}

function Animal () { }

Animal.prototype = {
  constructor: Animal,
  eat: function (eat) {
    console.log('nom nom nom')
  }

}

console.log(Animal.prototype)
console.log(Cat.prototype)
console.log(Bear.prototype)
