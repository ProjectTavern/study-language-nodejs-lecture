const { odd, even } = require('./1.js');
const checkNumber = require('./2.js');

function checkStringOddOrEven(str) {
  if (str.length % 2) return odd;
  else return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('Hello, It\'s me!'));
