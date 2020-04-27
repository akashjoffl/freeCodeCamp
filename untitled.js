function steamrollArray(val, flatArr = []) {
  val.forEach(item => {
    if (Array.isArray(item)) steamrollArray(item, flatArr);
    else flatArr.push(item);
  });

  return flatArr;
}

let result = steamrollArray([1, [2], [3, [[4]]]]);
console.log(result);