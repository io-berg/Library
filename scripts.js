let myLibrary = [];

// function Book(title, author, pages) {
//     this.title = '"' + title + '"';
//     this.author = author;
//     this.pages = pages;
//     this.id = '"' + title + '"' + author + "Pages: " + pages;
//     this.isRead = false;
// }

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.id = title + author + "Pages: " + pages;
        this.isRead = false;
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

addBookToLibrary(new Book('Harry Potter', 'JK Rowling', 400));
addBookToLibrary(new Book("Ice and fire", "FishMan", 200));


function buildCard(book) {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardTitle = document.createElement('h2');
    cardTitle.classList.add('card-title');
    cardTitle.innerText = book.title;
    const cardAuthor = document.createElement('h3');
    cardAuthor.classList.add('card-author');
    cardAuthor.innerText = book.author;
    const cardPages = document.createElement('p');
    cardPages.classList.add('card-pages');
    cardPages.innerText = "Pages: " + book.pages;

    const cardButtons = document.createElement('div');
    cardButtons.classList.add('card-buttons');
    const readButton = document.createElement('button');
    readButton.classList.add('read-button');
    readButton.classList.add('button');
    readButton.innerText = 'unread';
    readButton.style.backgroundColor = 'yellow';
    readButton.addEventListener('click', (e) => toggleRead(e));
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.classList.add('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', (e) => deleteCard(e));

    card.appendChild(cardTitle);
    card.appendChild(cardAuthor);
    card.appendChild(cardPages);
    card.appendChild(cardButtons);
    cardButtons.appendChild(readButton);
    cardButtons.appendChild(deleteButton);

    return card;
}

function DisplayBooks() {
    const cardContainer = document.querySelector('#BookCardsContainer');

    myLibrary.forEach(book => { 
        let card = buildCard(book);
        cardContainer.appendChild(card);
    })
}

function resetCards() {
    const cardContainer = document.querySelector('#BookCardsContainer');
    cardContainer.innerHTML = "";
    DisplayBooks();
}

DisplayBooks();

function createBook() {
    let form = document.querySelector('#creatBookForm');
    
    myLibrary.push(new Book(form.titleInput.value, form.authorInput.value, form.pagesInput.value));
    resetCards();
}


function toggleRead(e) {
    let id = e.target.parentNode.parentNode.children[0].innerText + e.target.parentNode.parentNode.children[1].innerText + e.target.parentNode.parentNode.children[2].innerText;
    if (e.target.innerText == 'read') {
        e.target.innerText = 'unread';
        e.target.style.backgroundColor = 'yellow';
        let index = myLibrary.findIndex(e => e.id == id);
        myLibrary[index].isRead = true;
    }
    else {
        e.target.innerText = 'read';
        e.target.style.backgroundColor = 'lightgreen';
        let index = myLibrary.findIndex(e => e.id === id);
        
        myLibrary[index].isRead = false;
    }
}

function deleteCard(e) {
    const cardContainer = document.querySelector('#BookCardsContainer');
    let id = e.target.parentNode.parentNode.children[0].innerText + e.target.parentNode.parentNode.children[1].innerText + e.target.parentNode.parentNode.children[2].innerText;
    
    let index = myLibrary.findIndex(e => e.id === id);

    myLibrary.splice(index, 1);
    cardContainer.removeChild(e.target.parentNode.parentNode);
}

let formOpened = false;

document.getElementById('Btn-CreateBook').addEventListener('click', () => {
    if (formOpened) {
        closeBookForm();
    }
    else {
        openBookForm();
    }
})

document.querySelector('#submitCreatBookBtn').addEventListener('click', closeBookForm);

function openBookForm() {
    document.getElementById('popupFormCreateBook').style.display = "block";
    document.getElementById('dimmer').style.display = 'block';
    formOpened = true;
}

document.querySelector('#dimmer').addEventListener('click', closeBookForm);

function closeBookForm() {
    document.getElementById('popupFormCreateBook').style.display = "none";
    document.getElementById('dimmer').style.display = 'none';
    formOpened = false;
}