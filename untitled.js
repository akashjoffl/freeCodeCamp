const pairElement = (initialStrand => {

  const calculatePair = (initial => {
    if (initial === "A") {
      return "T";
    } else if (initial === "T") {
      return "A";
    } else if (initial === "G") {
      return "C"
    } else if (initial === "C") {
      return "G";
    }
  });

  return initialStrand.split("").map(initialPair => {
    let pair = [initialPair, calculatePair(initialPair)]
    return pair;
  });


});

let result = pairElement("ATCGA")

console.log(result);
