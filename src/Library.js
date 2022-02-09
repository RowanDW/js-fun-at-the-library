function createLibrary(name) {
  return {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    },
  };
}

function addBook(library, book) {
  library.shelves[book.genre].push(book);
}

function checkoutBook(library, title, genre) {
  book = library.shelves[genre].filter((book) => book.title === title);
  bookIndex = library.shelves[genre].indexOf(book[0]);
  if (bookIndex > -1) {
    library.shelves[genre].splice(bookIndex, 1);
    return `You have now checked out ${title} from the ${library.name}`;
  } else {
    return `Sorry, there are currently no copies of ${title} available at the ${library.name}`;
  }
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};