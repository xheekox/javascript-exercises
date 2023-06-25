const leapYears = function(year) {

    // need to do validation first, return ERROR if <0 or not a number
    if (year < 0 || !Number.isInteger(year))
    {
        return "ERROR";
    }

    if(year%4 === 0)
    {
        if ((year%100 === 0) && !(year%400 === 0))
        {
            return false;
        } else
        {
            return true;
        }
    } else
    {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
