// Select the last child of the <ol> tag and put it at the beginning of the list

// const lista = document.querySelector('ol');
// const listaChildren = lista.children;
// console.log(listaChildren);

// const a = listaChildren[0];
// const b = listaChildren[4];
// lista.insertBefore(b,a);


// Move the <h2> of the third section in the second one and vice-versa


//const h2Elements = Array.from(document.querySelectorAll("h2"));

// function switchPosition(array, swap1, swap2) {
//   const temp = array[swap1];
//   //console.log(temp);
//   array.splice(swap1, 1, array[swap2]);
//   //console.log(array);
//   array.splice(swap2, 1, temp);
//   //console.log(array);
//   return array;
// }

// //const modifiedArray = switchPosition(Array.from(document.querySelectorAll("h2")), 1, 2);
// console.log(switchPosition(Array.from(document.querySelectorAll("h2")), 1, 2));


// console.log(selected);

// const mudarPosicao = (ordem, from, to) => {
//     titulos.splice(to, 0, titulos.splice(from,1)[0]);
//     return titulos

// };
// 

// // let titulos = Array.from(document.querySelectorAll("h2"));


// console.log(titulos);


// function switchPosition(titulos, from, to) {
//   const elementToMove = selected[from];
//   selected.splice(from, 1);
//   selected.splice(to, 0, elementToMove);
// }

// switchPosition(selected, 1, 0);

// console.log(selected);



// const first = h2[0];
// const second = h2[1];
// const third = h2[2];

// sec.insertBefore(third,second);


// Retrieve references to the elements
const thirdSectionHeading = document.querySelector('main > section:nth-child(2) > h2');
const secondSectionHeading = document.querySelector('main > section:nth-child(3) > div > h2');

// Remove the elements from their current positions
thirdSectionHeading.remove();
secondSectionHeading.remove();

// Insert the elements into their new positions
document.querySelector('main > section:nth-child(2)').appendChild(secondSectionHeading);
document.querySelector('main > section:nth-child(3) > div').appendChild(thirdSectionHeading);




// Delete the last section from the DOM, we don't need it anyways

const lastSection = document.querySelector("main > section:nth-child(3)");
lastSection.remove();