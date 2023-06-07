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

let paraclass = document.getElementsByClassName ("className")

console.log(para);



for (let i=0; i<para.length; i++) {
    console.log(para[i].innerHTML)
    if (para[i].contains.className) {
        console.log(paraclass[i].innerHTML)
    }
  
}

// Give each of the paragraph a random text color (different for each one) UNLESS it has a class then leave it as it is.

const para2 = document.querySelectorAll("p");

const randomColor = () => {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let bgColor = "rgb(" + x + "," + y + "," + z + ")";
  return bgColor;
};

for (let i = 0; i < para2.length; i++) {
  para2[i].style.backgroundColor = randomColor();
}

// OR 

// const para2 = document.querySelectorAll ("p")

// for (let i=0; i<para2.length; i++) {
//     para2[i].style.background = "#" + Math.floor(Math.random() * 16777215).toString(16);
//     if (para2[1].contains.className) {
//         para2[i].style.background = "none"
//     }
// }



// function randomcolor () {
//     let x = Math.floor(Math.random() * 256);
//     let y = Math.floor(Math.random() * 256);
//     let z = Math.floor(Math.random() * 256);
//     let bgColor = "rgb (" + x + "," + y + "," + z + ")";

// console.log(bgColor);

//     document.body.para2.style.background = bgColor;
// }

// const setBg = () => {
//     const randomColor = Math.floor(Math.random()*16777215).toString(16);
//     document.body.style.backgroundColor = "#" + randomColor;
//     color.innerHTML = "#" + randomColor;
//   }
  
//   genNew.addEventListener("click", setBg);
//   setBg();

// function rgba_bgcolors(){
//     var rgba_rand = 'rgba(' + random(255) + ', ' + random(255) + ', ' + random(255) + ', ' + '1' + ')'; //Math.random for alpha transparency 
  
//   // set innerText & color style to random color value
//   bodyElement.innerText = bodyElement.style.backgroundColor = rgba_rand;
  
//    }

// function (){
//     document.body.style.backgroundColor=
//     'rgb(' + Math.round(Math.random() * 255 ) + 
//     ',' Math.round(Math.random() * 255 ) + 
//     ',' Math.round(Math.random() * 255 ) + ')';
// }


// document.getElementsByClassName("important").style.backgroundColor = randomColorbg

// function randomColorbg () {
//     let letter = "123456789ABCDEF" .split("");
//     let color = "#"
//     for (let i=0; i < 6; i++) {
//         color += letters [ Math.floor(Math.random() * 16)]
//     }
//     return color;
// }