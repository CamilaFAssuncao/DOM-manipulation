// Add a title attribute to every element that has the important class, stating This is an important item


const itens = document.querySelectorAll ('.important')
console.log(itens);

for (let i= 0; i< itens.length; i++)  {
    itens[i].setAttribute ("title", "This is an important item")
}


// Select all the img tags and loop through them. If they have no important class, turn their display property to none

const images = document.querySelectorAll ('img')
console.log(images);


for (let i= 0; i< images.length; i++) {
    if (!images[i].classList.contains("important"))
   images[i].style.display = "none"
}
  
// Loop through all the paragraphs and display their content in the console. If the paragraph has a class, display its classname as well


const para = document.querySelectorAll ("p")

console.log(para);

for (let i=0; i<para.length; i++) {
    console.log(para[i].innerHTML)
    if ()
}

