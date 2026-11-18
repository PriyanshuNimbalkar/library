// Declarations

const myLibrary = [];

function Book(title, author, pages, hasRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.hasRead === true ? "already read" : "not read yet"}`;
};

Book.prototype.toggleRead = function () {
  this.hasRead = !this.hasRead;
};
