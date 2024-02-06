var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var primeNumbers = (function(arr) {
  return arr.filter(function(number) {
    for (var i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return number > 1;
  });
})(numbers);

console.log(primeNumbers);
