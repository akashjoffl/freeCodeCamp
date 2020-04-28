function binaryAgent(str) {
  return str.split(" ").map(binaryDataPoint => {
    let charecterCode = parseInt(binaryDataPoint, 2);
    let dedicatedLetter = String.fromCharCode(charecterCode)
    return dedicatedLetter;
  }).join("");
}


let binaryData = "01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001";


let result = binaryAgent(binaryData);
console.log(result);