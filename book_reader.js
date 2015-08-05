function BookReader(book) {
  this.book = book;
  this.currentPage = 0;
}

BookReader.prototype.nextPage = function() {
  if(this.currentPage < this.book.length-1){
  this.currentPage += 1;
  return this.book[this.currentPage];
  } else {
  return this.book[this.currentPage];
  }
};

BookReader.prototype.previousPage = function() {
  if(this.currentPage > 1){
  this.currentPage -= 1;
  return this.book[this.currentPage];
  } else  {
    return this.book[0];
  }
};

BookReader.prototype.pagesLeft = function() {
  pagesLeft = this.book.length - (this.currentPage+1);
  return pagesLeft;
};

BookReader.prototype.encouragement = function() {
  pagesLeft = this.book.length - (this.currentPage+1);
  if (pagesLeft === 2){
    return 'Keep going, only 2 pages left after this one!';
  } else if (pagesLeft === 1){
    return 'Keep going, this book is good \'til the last drop!';
  }
};

// DO NOT MODIFY BELOW THIS COMMENT:
module.exports = BookReader;
