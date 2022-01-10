let myLibrary = [];

function Book(title, author, pages, ) {
    this.title = '"' + title + '"';
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

addBookToLibrary(new Book('Harry Potter', 'JK Rowling', 400));
addBookToLibrary(new Book("Ice and fire", "FishMan", 200))

function DisplayBooks() {
    const cardContainer = document.querySelector('#BookCardsContainer');

    myLibrary.forEach(book => { 
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
        cardPages.innerText = book.pages;

        const cardButtons = document.createElement('div');
        cardButtons.classList.add('card-buttons');
        const readButton = document.createElement('button');
        readButton.classList.add('read-button');
        readButton.innerText = 'unread';
        readButton.style.backgroundColor = 'yellow';
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.innerText = 'Delete';

        card.appendChild(cardTitle);
        card.appendChild(cardAuthor);
        card.appendChild(cardPages);
        card.appendChild(cardButtons);
        cardButtons.appendChild(readButton);
        cardButtons.appendChild(deleteButton);

        cardContainer.appendChild(card);
    })
}

DisplayBooks();


document.querySelectorAll('.read-button').forEach(btn => btn.addEventListener('click', (e) => {
    if (e.target.innerText == 'read') {
        e.target.innerText = 'unread';
        e.target.style.backgroundColor = 'yellow';
    }
    else {
        e.target.innerText = 'read';
        e.target.style.backgroundColor = 'lightgreen';
    }
}));

document.querySelectorAll('.delete-button').forEach(btn => btn.addEventListener('click', (e) => {
    // Delete the element
    const cardContainer = document.querySelector('#BookCardsContainer');
    cardContainer.removeChild(e.target.parentNode.parentNode);
    
}));