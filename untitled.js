// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(updatedBookList, bookName) {
    let newXBooks = [...updatedBookList];
    newXBooks.push(bookName);
    return newXBooks;

    // Change code above this line
}

//console.log(add(bookList, 'XXXX'));
//console.log(bookList);
// Change code below this line
function remove(removeBookList, bookName) {
    var book_index = removeBookList.indexOf(bookName);
    if (book_index >= 0) {
        let removeXBook = [...removeBookList]; // cloning the array
        removeXBook.splice(book_index, 1);
        return removeXBook;
        // Change code above this line
    }
}
//console.log(remove(bookList, 'On The Electrodynamics of Moving Bodies'));

var newBookList = add(bookList, 'A Brief History of Time');
//console.log(newBookList);
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

//console.log(bookList);
