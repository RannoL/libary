let myLibary = [["The Hobbit", "J.R.R. Tolkin", "300", false], ["Kevade", "Oskar Luts", "230", false]];

function Book(title, author, pages, read) {
    this.title = form.title.value;
    this.author = form.author.value;
    this.pages = form.pages.value;
    this.read = form.read.value ? "I have read it." : "Not read.";

    console.log(this.title)

    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`;
    }
}

function addBookToLibary() {
    let newBook = new Book(title, author, pages, read);
    myLibary.push(newBook);
 }


function displayLibary(){
    const div = document.getElementById("booksDisplay")
    for (let i = 0; i < myLibary.length; i++) {
       let para = document.createElement("p");
       para.innerHTML = myLibary[i];
       div.appendChild(para);
       
    }
}

function capitalizeFirst(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

