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
    const div = document.getElementById("booksDisplay");
    for (let i = 0; i < myLibary.length; i++) {
       let newDiv = document.createElement("div");
       newDiv.innerHTML = myLibary[i];
       div.appendChild(newDiv);
       
    }
}
//toggle hide on progress input
function showProgressInput(){
    //label
    document.querySelector('label[for="progressInput"]')
            .classList
            .toggle("hidden");
    //input
    document.getElementById("progressInput")
            .classList
            .toggle("hidden");
}

function capitalizeFirst(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function openForm(){
    document.getElementById("formPopup").style.display = "flex";
    document.getElementById("modal").style.display ="block";
}

function closeForm(){
    document.getElementById("formPopup").style.display = "none";
    document.getElementById("modal").style.display ="block";

}



