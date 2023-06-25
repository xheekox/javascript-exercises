const reverseString = function (myString) {

    const stringHolder = [];
    const newString = [];

    // iterate through a string and dump each character into the array
    for (let i = 0; i < myString.length; i++)
    {
        stringHolder[i] = myString[i];
    }

    // perform reversal, by dumping the characters from array 1 backwards into array 2
    for (let j = stringHolder.length - 1; j >= 0; j--)
    {
        newString[stringHolder.length - 1 - j] = stringHolder[j];
    }

    // return a string from the new array without commas
    return newString.join("");

};

// Do not edit below this line
module.exports = reverseString;
