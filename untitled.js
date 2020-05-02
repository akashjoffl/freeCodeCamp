function rot13(str) {
  let decodedResult = "";
  let alphabetStart = 'ABCDEFGHIJKLM';
  let alphabetEnd = 'NOPQRSTUVWXYZ';

  str.split("").forEach(function (letterToDecode) {
    let alphabetStartIndex = alphabetStart.indexOf(letterToDecode);
    let alphabetEndIndex = alphabetEnd.indexOf(letterToDecode);

    if (alphabetStartIndex >= 0) {
      decodedResult += alphabetEnd[alphabetStartIndex];
    } else if (alphabetEndIndex >= 0) {
      decodedResult += alphabetStart[alphabetEndIndex];
    } else {
      decodedResult += letterToDecode;
    }
  });

  return decodedResult;
}

let result = rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
console.log(result);