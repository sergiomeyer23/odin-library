const myLibrary = [];

function Book(title, author, pages, read) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// troca o status de lido / não lido
Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

const libraryDiv = document.querySelector("#library");
const emptyMsg = document.querySelector("#empty-msg");

function displayBooks() {
  libraryDiv.innerHTML = "";
  emptyMsg.hidden = myLibrary.length > 0;

  myLibrary.forEach((book) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.id = book.id;

    const title = document.createElement("h3");
    title.textContent = book.title;

    const author = document.createElement("p");
    author.textContent = "Autor: " + book.author;

    const pages = document.createElement("p");
    pages.textContent = book.pages + " páginas";

    const status = document.createElement("p");
    status.classList.add("status");
    status.textContent = book.read ? "Lido" : "Ainda não li";

    const toggleBtn = document.createElement("button");
    toggleBtn.classList.add("toggle-btn");
    toggleBtn.textContent = book.read ? "Marcar como não lido" : "Marcar como lido";

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("remove-btn");
    removeBtn.textContent = "Remover";

    card.append(title, author, pages, status, toggleBtn, removeBtn);
    libraryDiv.appendChild(card);
  });
}

// um clique no container resolve os botões de todos os cards
libraryDiv.addEventListener("click", (e) => {
  const card = e.target.closest(".card");
  if (!card) return;

  const id = card.dataset.id;

  if (e.target.classList.contains("remove-btn")) {
    const index = myLibrary.findIndex((book) => book.id === id);
    if (index !== -1) myLibrary.splice(index, 1);
    displayBooks();
  }

  if (e.target.classList.contains("toggle-btn")) {
    const book = myLibrary.find((book) => book.id === id);
    if (book) book.toggleRead();
    displayBooks();
  }
});

const dialog = document.querySelector("#book-dialog");
const form = document.querySelector("#book-form");

document.querySelector("#new-book-btn").addEventListener("click", () => {
  dialog.showModal();
});

document.querySelector("#cancel-btn").addEventListener("click", () => {
  form.reset();
  dialog.close();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.querySelector("#title").value.trim();
  const author = document.querySelector("#author").value.trim();
  const pages = Number(document.querySelector("#pages").value);
  const read = document.querySelector("#read").checked;

  addBookToLibrary(title, author, pages, read);
  displayBooks();

  form.reset();
  dialog.close();
});

// alguns livros para testar o layout
addBookToLibrary("Dom Casmurro", "Machado de Assis", 256, true);
addBookToLibrary("O Hobbit", "J. R. R. Tolkien", 310, false);
addBookToLibrary("Fundamentos de Matemática Elementar", "Gelson Iezzi", 380, false);
displayBooks();
