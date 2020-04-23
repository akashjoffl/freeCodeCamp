function spinalCase(str) {
  let camelCase = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  let spacesAndDashes = camelCase.replace(/\s|_/g, "-");
  return spacesAndDashes.toLowerCase();
}

console.log(spinalCase('This Is Spinal Tap'));

//  var spinal = str.replace(/(?!^)([A-Z])/g, ' $1')
//                 .replace(/[_\s]+(?=[a-zA-Z])/g, '-').toLowerCase();
//return spinal 
