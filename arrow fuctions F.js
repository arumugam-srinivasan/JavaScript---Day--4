const array = ['madam', 'racecar', 'hello', 'level'];

const palindromes = array.filter(str => {
  const reversedStr = str.toLowerCase().split('').reverse().join('');
  return str.toLowerCase() === reversedStr;
});

console.log(palindromes);
