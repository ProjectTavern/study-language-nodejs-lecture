const { odd, even } = require('./1.js');

function checkOddOrEven(number) {
  if (number % 2) return odd;
  else return even;
}

module.exports = checkOddOrEven;
