# Library

[The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-library) project: a personal library built with plain HTML, CSS and JavaScript.

Live demo: https://sergiomeyer23.github.io/odin-library/

## Features

- See your books as cards (title, author, pages and read status)
- Add a book with the "New Book" button, which opens a form in a `<dialog>`
- Remove a book
- Mark a book as read or unread

## How it works

- Books are stored in the `myLibrary` array and created by the `Book` constructor.
- Every book has an `id` generated with `crypto.randomUUID()`. Each card keeps that `id` in a `data-id` attribute, which is how the right book gets removed or updated.
- `Book.prototype.toggleRead` switches the read status.
- `displayBooks()` renders the page from the array, so the data and the display stay separate.
- The form uses `event.preventDefault()` so it doesn't try to send the data to a server.

Nothing is saved, so the list resets when the page reloads.

## Running it

Open `index.html` in a browser. There is nothing to install.
