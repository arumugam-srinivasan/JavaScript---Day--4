let array = [1, 2, 3, 4, 5];
let sum = function(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}(array);

console.log(sum) 
