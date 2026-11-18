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
