function diffArray(arr1, arr2) {
  var newArr = [];

  function compareAgainstEachOther(first, second) {
    first.forEach(number => {
      if (second.indexOf(number) === -1) { newArr.push(number) }
    })
  }
  compareAgainstEachOther(arr1, arr2);
  compareAgainstEachOther(arr2, arr1);
  return newArr;
}

console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
  ["diorite", "andesite", "grass", "dirt", "dead shrub", "john cena"]));