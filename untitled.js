function convertCharecter(letter) {
  if (letter === "&") {
    return "&amp;";
  } else if (letter === "<") {
    return "&lt;";
  } else if (letter === ">") {
    return "&gt;";
  } else if (letter === '"') {
    return "&quot;";
  } else if (letter === "'") {
    return "&apos;";
  } else if (letter == "<>") {
    return "&lt;&gt;";
  }
}

function convertHTML(str) {
  let charectersToCheckFor = ["&", "<", ">", "'", '"', "<>"];

  for (let i = 0; i < str.length; i++) {
    // console.log(str[i])
    if (charectersToCheckFor.indexOf(str[i]) != -1) {
      let symbolToConvert = str[i];
      str = str.slice(0, i) +
        convertCharecter(symbolToConvert) +
        str.slice(i + 1)
    };
  }
  return str;
}

let result = convertHTML("Dolce & Gabbana");
console.log(result);