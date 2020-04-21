function destroyer(arr) {
  let survivingElements = [];
  let battleField = Object.values(arguments)[0];
  let elementToDestroy = Object.values(arguments).splice(1);

  for (let i = 0; i < battleField.length; i++) {
    let positionToRecon = battleField[i];
    if (elementToDestroy.indexOf(positionToRecon) === -1) {
      survivingElements.push(positionToRecon);
    }
  }
  return survivingElements;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
// [1, 1]