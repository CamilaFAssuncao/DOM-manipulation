const title = document.querySelector ('.important')
console.log(title);

title.setAttribute ('title', "This is an important item")  //works settint the attribute just to the first paragraph and not to all elements with class=important 


const newtitle = document.querySelectorAll (".important")
console.log (newtitle);

newtitle.setAttribute ('title', "This is an important item")