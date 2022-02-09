function shelfBook(book, shelf) {
  if (shelf.length > 2) {
    return shelf;
  } else {
    return shelf.unshift(book);
  }
}

function unshelfBook(removeBook, shelf) {
  book = shelf.filter((book) => book.title === removeBook);
  bookIndex = shelf.indexOf(book[0]);
  shelf.splice(bookIndex, 1);
}

function listTitles(shelf) {
  return shelf.map(book => book.title).join(', ');
}

function searchShelf(shelf, bookTitle) {
  book = shelf.filter((book) => book.title === bookTitle);
  return book[0] !== undefined;
}


module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};