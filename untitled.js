function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  let orbitalPeriodResults = [];

  arr.forEach(function (dataPoint) {
    let translatedDataPoint = {};
    let twoTimePie = Math.PI * 2;
    let earthRadiusPlusAverageAltitude = earthRadius + dataPoint.avgAlt;
    let topOfDivider = earthRadiusPlusAverageAltitude *
      earthRadiusPlusAverageAltitude *
      earthRadiusPlusAverageAltitude;
    console.log(earthRadiusPlusAverageAltitude);

    let numberToSquare = topOfDivider / GM;
    let squareResult = Math.sqrt(numberToSquare);

    let orbitalPeriodResult = twoTimePie * squareResult;
    console.log(orbitalPeriodResult);

    translatedDataPoint.name = dataPoint.name;
    translatedDataPoint.orbitalPeriod = Math.round(orbitalPeriodResult)

    orbitalPeriodResults.push(translatedDataPoint);

  });

  return orbitalPeriodResults;
}

let inputResult = orbitalPeriod(
  [
    { name: "iss", avgAlt: 413.6 },
    { name: "hubble", avgAlt: 556.7 },
    { name: "moon", avgAlt: 378632.553 }
  ]
);

console.log(inputResult);