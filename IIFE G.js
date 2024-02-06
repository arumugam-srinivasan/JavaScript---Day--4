(function(array) {
  var uniqueArray = [...new Set(array)];
  console.log(uniqueArray);
})
([1, 2, 2, 3, 4, 4, 5]);
