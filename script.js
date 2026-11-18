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

function addBookToLibrary(title, author, pages, hasRead) {
  myLibrary.push(new Book(title, author, pages, hasRead));
}

function displayBooks() {
  libraryContainer.replaceChildren();

  myLibrary.forEach((item, index) => {
    const bookCard = document.createElement("div");
    const book = document.createElement("p");
    const delBtn = document.createElement("button");
    const toggleBtn = document.createElement("button");

    bookCard.classList.add("book-card");
    book.textContent = item.info();
    bookCard.dataset.index = index;
    delBtn.textContent = "Delete";
    toggleBtn.classList.add("toggle");
    // toggleBtn.textContent = `${item.hasRead === false ? "Not read" : "Already read"}`;
    toggleBtn.textContent = `Change read status`;

    libraryContainer.appendChild(bookCard);
    bookCard.appendChild(book);
    bookCard.appendChild(toggleBtn);
    bookCard.appendChild(delBtn);
  });
}
addBookToLibrary("eragon", "cristopher", 300, false);
addBookToLibrary("eragon2", "cristopher2", 400, false);

const libraryContainer = document.querySelector("#library-container");
const controlsContainer = document.querySelector("#controls-container");

// controlsContainer

// addBtn

const addBtn = document.createElement("button");

addBtn.textContent = "Add Book";
addBtn.id = "add-book-btn";

controlsContainer.appendChild(addBtn);

// addBtn form

const addBtnForm = document.createElement("form");
addBtnForm.id = "add-btn-form";

const bookNameLabel = document.createElement("label");
const bookName = document.createElement("input");

bookNameLabel.textContent = "Book Name";
bookNameLabel.htmlFor = "book-name";

bookName.type = "text";
bookName.id = "book-name";
bookName.required = true;

const authorNameLabel = document.createElement("label");
const authorName = document.createElement("input");

authorNameLabel.textContent = "Author Name";
authorNameLabel.htmlFor = "author-name";

authorName.type = "text";
authorName.id = "author-name";
authorName.required = true;

const bookPagesLabel = document.createElement("label");
const bookPages = document.createElement("input");

bookPagesLabel.textContent = "Pages";
bookPagesLabel.htmlFor = "pages";

bookPages.type = "number";
bookPages.id = "pages";
bookPages.required = true;

const readStatusLabel = document.createElement("label");
const readStatus = document.createElement("input");

readStatusLabel.textContent = "Read or Not?";
readStatusLabel.htmlFor = "has-read";

readStatus.type = "checkbox";
readStatus.id = "has-read";

addBtnForm.appendChild(bookNameLabel);
addBtnForm.appendChild(bookName);
addBtnForm.appendChild(authorNameLabel);
addBtnForm.appendChild(authorName);
addBtnForm.appendChild(bookPagesLabel);
addBtnForm.appendChild(bookPages);
addBtnForm.appendChild(readStatusLabel);
addBtnForm.appendChild(readStatus);

