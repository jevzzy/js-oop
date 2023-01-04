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




// function to add book to array
function addBookToLibrary(){
    let title = document.getElementById('title').value
    let author = document.getElementById('author').value
    let page = document.getElementById('page').value
    
let newBook = new Book(title,author,page)
 myLibrary.push(newBook)
 displayarray()
}






function displayarray(){
    let mybooks = document.querySelector('.mylibrary')
    //clearing mybooks
    while(mybooks.firstChild){
        mybooks.firstChild.remove();
      }
    for(let i = 0; i < myLibrary.length; i++) {
        //create divs according to array length
        let box = document.createElement("div")
        // create delete button for every div
        const deleteBtn = document.createElement("button")
deleteBtn.innerHTML = "<a>delete</a>"
deleteBtn.setAttribute("data-index", i)
deleteBtn.style.backgroundColor = "red";
deleteBtn.addEventListener("click", (e)=>{
console.log(e)
//remove element from array according to index
let index = deleteBtn.dataset
myLibrary.splice(index, 1)
console.log(myLibrary)
displayarray()

})

const readCheck = document.createElement("input")
readCheck.setAttribute ("type", "checkbox")
const readTxt = document.createElement("h5")
readTxt.innerText = `read`
readTxt.appendChild(readCheck)
        box.classList.add("cards")
        let title = document.createElement("h5")
        let author = document.createElement("h5")
        let pages = document.createElement("h5")
        title.innerText = `Title: ${myLibrary[i].title}` 
        author.innerText = `Author: ${myLibrary[i].author} `
        pages.innerText =  `Pages: ${myLibrary[i].pages}`   
        box.appendChild(title)
        box.appendChild(author)
        box.appendChild(pages)
        box.appendChild(readTxt)
        box.appendChild(deleteBtn)
        mybooks.appendChild(box)
    };
}




  
  function clearInput(){
    var titleValue= document.getElementById("title");
    var authorValue= document.getElementById("author");
    var pageValue= document.getElementById("page");
      if (titleValue.value !="" &&
       authorValue.value !="" && 
       pageValue.value !=""  ) {
          titleValue.value = "";
          authorValue.value = "";
          pageValue.value = "";
          
      }
}
const bookBtn = document.querySelector('.new') 
const newbook = document.querySelector('.book-form');
const cancelBtn = document.querySelector('.cancel')
const addBtn = document.querySelector('.add')

addBtn.addEventListener("click", addBookToLibrary)
document.querySelector(".book-form").addEventListener("submit", (e)=>{

    newbook.style.display = 'none';
    bookBtn.style.display = 'block'
    clearInput()
    e.preventDefault();
  });
document.addEventListener("DOMContentLoaded", displayarray)
cancelBtn.addEventListener("click", ()=>{
    newbook.style.display = 'none';
    bookBtn.style.display = 'block'
    clearInput()
})
bookBtn.addEventListener("click", ()=>{
    
    newbook.style.display = 'block';
    bookBtn.style.display = ' none';
})

