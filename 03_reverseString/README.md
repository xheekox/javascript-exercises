# Exercise 03 - Reverse a String

Pretty simple, write a function called `reverseString` that returns its input, reversed!

```javascript
reverseString('hello there') // returns 'ereht olleh'
```

function reverseString(myString)
{
    const stringHolder = [];

    for (let i = 0; i < mystring.length; i++)
    {
        stringHolder[i] = myString[i];
    }

    for (let j = stringHolder.length - 1; j > 0; j--)
    {
        myString[stringHolder.length - 1 - j] = stringHolder[j];
    }

    return myString;
}

## Hints
Strings in JavaScript cannot be reversed directly so you're going to have to split it into something else first.. do the reversal and then join it back together into a string.
