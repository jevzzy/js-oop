
//empty library

const  myLibrary = []


//object
class Book {
    constructor(title, author, pages, info){
        this.title = title
        this.author = author
        this.pages = pages
        //this.info = function() {
           // return `The ${this.title} by ${this.author} contains ${this.pages} pages`}
    }
  
}


const crash = new Book('titan','jude','200')
const titan = new Book('hobbit','angel', '234')
myLibrary.push(crash)
myLibrary.push(titan)


let mybooks = document.querySelector('.mylibrary')


function displayarray(){
    myLibrary.forEach(book => {
        let box = document.createElement("div")
        box.classList.add("cards")
        let title = document.createElement("h5")
        let author = document.createElement("h5")
        let pages = document.createElement("h5")
        title.innerText = `Title: ${book.title}` 
        author.innerText = `Author: ${ book.author} `
        pages.innerText =  `Pages: ${book.pages}`   
        box.appendChild(title)
        box.appendChild(author)
        box.appendChild(pages)
        mybooks.appendChild(box)
    });
}

// function tto add book to array
function addBookToLibrary(){
    let title = document.getElementById('title').value
    let author = document.getElementById('author').value
    let page = document.getElementById('page').value
    
let newBook = new Book(title,page,author)
return myLibrary.push(newBook)
}

document.addEventListener("DOMContentLoaded", displayarray)

const addBtn = document.querySelector('.add')

addBtn.addEventListener("mousedown", addBookToLibrary)

document.querySelector(".book-form").addEventListener("submit", (e)=>{
    
    e.preventDefault();
  });
  






































const bookBtn = document.querySelector('.new') 
const newbook = document.querySelector('.book-form');
const cancelBtn = document.querySelector('.cancel')



cancelBtn.addEventListener("click", ()=>{
    newbook.style.display = 'none';
    bookBtn.style.display = 'block'
})



bookBtn.addEventListener("click", ()=>{
    
    newbook.style.display = 'block';
    bookBtn.style.display = ' none';
})

