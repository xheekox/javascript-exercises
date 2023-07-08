const findTheOldest = function(people) {
    // i should have a variable that will hold the element, and switch if an older one is found.
    const oldestPerson = people.reduce(
        // oldest personAge will hold the oldest person, initially set to 0. 
        (oldestAgedPerson, currentPerson) => {
            // check if has DeathYear
            let currentPersonAge = 0;
            let oldestPersonAge = 0;
            
            // console.log(currentPerson);
            // console.log(oldestAgedPerson);

            if(!("yearOfDeath" in currentPerson)) {
                currentPersonAge = 2024 - currentPerson.yearOfBirth;
            } else {
                currentPersonAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;
            }

            // console.log(currentPersonAge);
            // console.log(oldestPersonAge);

            if(!("yearOfDeath" in oldestAgedPerson)) {
                oldestPersonAge = 2024 - oldestAgedPerson.yearOfBirth;
            } else {
                oldestPersonAge = oldestAgedPerson.yearOfDeath - oldestAgedPerson.yearOfBirth;
            }

            // console.log(currentPersonAge);
            // console.log(oldestPersonAge);

            if (currentPersonAge > oldestPersonAge)
            {
                return oldestAgedPerson = currentPerson;
            } else
            {
                return oldestAgedPerson;
            }
        }
    , 
    {
        name: "hello",
        yearOfBirth: 0,
        yearOfDeath: 0,
    }
    )

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
