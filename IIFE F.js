function medianOfArrays(arr1, arr2) {
  var mergedArray = arr1.concat(arr2);
  mergedArray.sort(function(a, b) {
    return a - b;
  });
  
  var midIndex = Math.floor(mergedArray.length / 2);
  if (mergedArray.length % 2 === 0) {
    return (mergedArray[midIndex - 1] + mergedArray[midIndex]) / 2;
  } else {
    return mergedArray[midIndex];
  }
}

var arr1 = [1, 12, 15, 26, 38];
var arr2 = [2, 13, 17, 30, 45];

var median = medianOfArrays(arr1, arr2);
console.log(median); 
