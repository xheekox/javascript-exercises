const sumAll = function(int1, int2) 
{
    let beginningInt;
    let endingInt;

    // check if values are not negative or that they are a number.
    if (int1<0 || int2<0 || !Number.isInteger(int1) || !Number.isInteger(int2))
    {
        return "ERROR";
    } else if (int1 < int2)
    {
        beginningInt = int1;
        endingInt = int2;
    } else 
    {
        beginningInt = int2;
        endingInt = int1;
    }

    let finalSum = 0;

    for (let i = beginningInt; i <= endingInt; i++)
    {
        finalSum += i;
    }

    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
