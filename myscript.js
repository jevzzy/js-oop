function displayarray(){
    for(let i = 0; i < myLibrary.length; i++) {
//loops create div element according to how many object in library array
    let cards = document.createElement('div')
    cards.classList.add('cards')
    let title = document.createElement('h5')
    title.innerText = `title: ${myLibrary[i].title}`
    let author = document.createElement('h5')
    author.innerText = `author: ${myLibrary[i].author}`
    let pages = document.createElement('h5')
    pages.innerText = `pages: ${myLibrary[i].pages}`
    cards.appendChild(title)
    cards.appendChild(author)
    cards.appendChild(pages)
    let mybooks = document.querySelector('.mylibrary')
    mybooks.append(cards)
    
}
}



//empty library
let myLibrary = []


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







// function to add book to array
function addBookToLibrary(){
    let titleInput = document.getElementById('title')
let authorInput = document.getElementById('author')
let pageInput = document.getElementById('page')
let author = authorInput.innerText
let page = pageInput.innerText
let title = titleInput.innerText
const newBook = new Book(title,page,author)
 
 return myLibrary.push(newBook)
}
console.log(addBookToLibrary())

const addBtn = document.querySelector('.add')
addBtn.addEventListener("click", addBookToLibrary)

console.log(myLibrary)
console.log(displayarray())







































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

