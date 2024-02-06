function convertToTitleCaps(arr) {
  return arr.map(function(str) {
    return str.toLowerCase().split(' ').map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  });
}

var stringArray = ['hello world',];
var titleCapsArray = convertToTitleCaps(stringArray);
console.log(titleCapsArray);
