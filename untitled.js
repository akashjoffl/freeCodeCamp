// The global variable
var globalTitle = "Winter Is Coming";

// Only change code below this line
function urlSlug(title) {
  return title
    .split(" ")
    .filter(word => { if (word != "") return word; })
    .join("-")
    .toLowerCase();

}
// Only change code above this line
console.log(urlSlug("Winter Is Coming"));