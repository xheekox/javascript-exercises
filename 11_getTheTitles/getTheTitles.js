// const books = [
//     {
//         title: "book of the dead",
//         author: "vlad putin",
//     },
//     {
//         title: "brave new world!",
//         author: "Alduos Huxley",
//     }
// ]

// console.log(books.map(element => element.title));

const getTheTitles = function(listOfBooks) {

    // array [ {key1:property1, key2:property2}, ...]
    // each array element, is an object with two key pairs.
    // iterate through to array
    // access the title or
    return listOfBooks.map(element => element.title);

};

// Do not edit below this line
module.exports = getTheTitles;
