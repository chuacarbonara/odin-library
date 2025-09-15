const myLibrary = [];

const cardLibrary = document.getElementById("library");

function openForm() {
    document.getElementById("form-container").style.display = "block";
}

function closeForm() {
    document.getElementById("form-container").style.display = "none";
}

function Book(title, author, genre, reads, id) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.reads = reads;
  this.id = id;
}

function showBook() {
    const removePrevious = document.querySelectorAll(".card");
        for (let i = 0; i < removePrevious.length; i++){
            removePrevious[i].remove();
        }
        
    myLibrary.forEach(book => {
        const newCard = document.createElement("div");
        newCard.classList.add("card");
        newCard.dataset.bookId = book.id;
        cardLibrary.appendChild(newCard);
       
        const bookTitle = document.createElement("p");
        bookTitle.innerText = `${book.title}`;
        bookTitle.style = "width: 100%; background-color: rgba(194, 0, 65, 0.8); font-size: 1.5em; font-weight: bold; text-align: center;"
        newCard.appendChild(bookTitle);

        const bookAuthor = document.createElement("p");
        bookAuthor.innerText = `Author: ${book.author}`
        newCard.appendChild(bookAuthor);

        const bookGenre = document.createElement("p");
        bookGenre.innerText = `Genre: ${book.genre}`
        newCard.appendChild(bookGenre);

        const readCheck = document.getElementById("read-status");
        const readStatus = document.createElement("div");
        newCard.appendChild(readStatus);
        if (readCheck.checked == true) {
            readStatus.innerText = "✓ Read";
        } else {
            readStatus.innerText = "x Unread"
        }

        const removeBtn = document.createElement("button");
        removeBtn.classList.add("rmvbtn");
        newCard.appendChild(removeBtn);
        removeBtn.innerText = "X Remove";
        removeBtn.addEventListener("click", () => {
            const bIndex = myLibrary.findIndex(b => b.id === book.id);
            myLibrary.splice(bIndex, 1);
            showBook();
        });
    });
}

function addBookToLibrary() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let genre = document.getElementById("genre").value;
  let reads = "Unread";
  let id = crypto.randomUUID();
  let newBook = new Book(title, author, genre, reads, id);
  myLibrary.push(newBook);
  console.log(myLibrary);
  showBook();
}

const bookForm = document.getElementById("new-book-form");

bookForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addBookToLibrary();
});