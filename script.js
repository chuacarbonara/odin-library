const myLibrary = [];

const cardLibrary = document.getElementById("library");

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

function showBook() {
    const removePrevious = document.querySelectorAll(".card");
        for (let i = 0; i < removePrevious.length; i++){
            removePrevious[i].remove();
        }
        
    myLibrary.forEach(myLibrary => {
        const newCard = document.createElement("div");
        newCard.classList.add("card")
        cardLibrary.appendChild(newCard);
        for (let key in myLibrary) {
            console.log(`${key}: ${myLibrary[key]}`);
            const para = document.createElement("p");
            para.textContent = (`${key}: ${myLibrary[key]}`);
            newCard.appendChild(para);
        }
    })
}

function addBookToLibrary() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let genre = document.getElementById("genre").value;
  let newBook = new Book(title, author, genre);
  myLibrary.push(newBook);
  showBook();
}

document.getElementById("new-book-form").addEventListener("submit", (event) => {
    event.preventDefault();
    addBookToLibrary();
});