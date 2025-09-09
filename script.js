const myLibrary = [];

function openForm() {
    document.getElementById("form-container").style.display = "block";
}

function closeForm() {
    document.getElementById("form-container").style.display = "none";
}

function Book(title, author, genre) {
  this.title = title;
  this.author = author;
  this.genre = genre;
}

function addBookToLibrary() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let genre = document.getElementById("genre").value;
  let newBook = new Book(title, author, genre);
  myLibrary.push(newBook);
  console.log(myLibrary);
}

document.getElementById("new-book-form").addEventListener("submit", (event) => {
    event.preventDefault();
    addBookToLibrary();
})