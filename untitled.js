var Person = function (firstAndLast) {
  // Complete the method below and implement the others similarly

  this.getFullName = function () {
    return firstAndLast;
  };

  this.getFirstName = function () {
    return firstAndLast.split(" ")[0];
  };

  this.getLastName = function () {
    return firstAndLast.split(" ")[1];
  };

  this.setFullName = function (newFullName) {
    return firstAndLast = newFullName;
  };

  this.setFirstName = function (newFirstName) {
    return firstAndLast = newFirstName + " " + this.getLastName();
  }

  this.setLastName = function (newLastName) {
    return firstAndLast = this.getFirstName() + " " + newLastName;
  }

  return firstAndLast;
};

var bob = new Person('Bob Ross');

console.log(bob.getFullName());