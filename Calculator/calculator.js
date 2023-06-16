const mainDiv = document.createElement("div");
mainDiv.classList.add("mainDiv");

const display = document.createElement("div");
display.classList.add("display");

const buttonKeys = document.createElement("div");
buttonKeys.classList.add("buttonKeys");


// const operators = documment.createElement("button");
// operators.classList.add("operators");

document.body.appendChild(mainDiv);
document.body.appendChild(display);
document.body.appendChild(buttonKeys);


mainDiv.appendChild(display);
mainDiv.appendChild(buttonKeys);

const mainElement = document.querySelector("main");
mainElement.appendChild(mainDiv);
mainDiv.appendChild(display);
mainDiv.appendChild(buttonKeys);


