// Select the last child of the <ol> tag and put it at the beginning of the list

// const lista = document.querySelector('ol');
// const listaChildren = lista.children;
// console.log(listaChildren);

// const a = listaChildren[0];
// const b = listaChildren[4];
// lista.insertBefore(b,a);


// Move the <h2> of the third section in the second one and vice-versa

// const sec = document.querySelectorAll("h2");

// const selected = Array.from(document.querySelectorAll("h2"));

// function switchPosition (selected, from, to) {
//     selected.splice(to, 1, selected.splice(from,2)[0])
//     return selected
// }

// switchPosition (selected, 2, 1);

// console.log(selected);

const mudarPosicao = (ordem, from, to) => {
    titulos.splice(to, 0, titulos.splice(from,1)[0]);
    return titulos

};

let titulos = Array.from(document.querySelectorAll("h2"));

console.log(titulos);


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


// Delete the last section from the DOM, we don't need it anyways