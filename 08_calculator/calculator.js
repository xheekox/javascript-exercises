const add = function(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
	
};

const subtract = function(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0); // 0 is initial value given to accumulator (or total in this case)
	
};

const multiply = function(...args) {
  let product = 1;
  for (let i = 0; i < args.length; i++)
  {
    product *= args[i];
  }

  return product;

};

const power = function(base, power) {
  return Math.pow(base, power);
};

const factorial = function(factorial) {
	if (factorial === 0) return 1;

  let product = 1;
  for (let i = factorial; i > 0; i--)
  {
    product *= i;
  }

  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
