const fibonacci = function(number) {
    // check for negative numbers
    // check for strings, convert to numbers.

    // logic for fibonacci
    // first number and second number set to 1
    // both numbers get added together into result
    // first number gets the value of second number
    // second number gets the value of result. rinse and repeat
    if(number < 0) return "OOPS";
    if(typeof number === "string") number = parseInt(number);

    let firstNumber = 1;
    let secondNumber = 1;
    let result = 0;
    if (number == 1 || number == 0) return 1;

    for (i = 2; i<number; i++)
    {
        result = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = result;
    }

    return secondNumber;
};

// Do not edit below this line
module.exports = fibonacci;
