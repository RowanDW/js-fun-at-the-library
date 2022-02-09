const { checkoutBook } = require("./library");
const { searchShelf } = require("./shelf");

class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }

  greetPatron(name, morning) {
    if (morning) {
      return `Good morning, ${name}!`;
    } else {
      return `Hello, ${name}!`;
    }
  }

  findBook(title) {
    var shelves = Object.keys(this.library.shelves);
    for ( var i = 0; i < shelves.length; i++ ) {
      if (searchShelf(this.library.shelves[shelves[i]], title)) {
        checkoutBook(this.library, title, shelves[i]);
        return `Yes, we have ${title}`;
      } 
    }
    return `Sorry, we do not have ${title}`;
  }

  calculateLateFee(days) {
    return Math.ceil(0.25 * days);
  }
}

module.exports = Librarian;