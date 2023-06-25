const removeFromArray = function(arrayToHandle) 
{

// iterate through the list of all optional arguments provided.
    for (let i = arguments.length-1; i > 0; i--)
    {
        for (let j = 0; j < arrayToHandle.length; j++)
        {
            if (arrayToHandle[j] === arguments[i])
            {
                arrayToHandle.splice(j, 1);
            }
        }
    }
// for each optional argument provided, loop through the provided array
// if the value of an array element is equal to the value of the current optional argument considered, remove that value from the array

    return arrayToHandle;
};

// Do not edit below this line
module.exports = removeFromArray;
