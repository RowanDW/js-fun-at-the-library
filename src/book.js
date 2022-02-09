function createTitle(title) {
  return `The ${title}`;
}

function buildMainCharacter(name, age, pronouns){
  return {
    name: name,
    age: age,
    pronouns: pronouns,
  };
}

function saveReview(newReview, reviews) {
  if (reviews.includes(newReview)) {
    return reviews;
  } else {
    return reviews.push(newReview);
  };
}

function calculatePageCount(title) {
  return title.length * 20;
}

function writeBook(bookTitle, bookCharacter, genre) {
  return {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre,
  };
}

function editBook(book) {
  return book.pageCount = book.pageCount * 0.75;
}


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}