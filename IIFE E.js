function returnPalindromes(arr) {
  var palindromes = arr.filter(function(word) {
    return word.toLowerCase() === word.toLowerCase().split('').reverse().join('');
  });
  return palindromes;
}

var words = ['level', 'hello', 'racecar', 'world'];
var palindromes = returnPalindromes(words);
console.log(palindromes); 
