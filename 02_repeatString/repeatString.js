const repeatString = function(repeatedString, repeatCount) {
let repeatedStringHolder = "";
if (repeatCount < 0)
{
    return "ERROR";
}
for (let index = 0; index < repeatCount; index++) {
    repeatedStringHolder = repeatedStringHolder + repeatedString;
    
}

return repeatedStringHolder;

};

// Do not edit below this line
module.exports = repeatString;
