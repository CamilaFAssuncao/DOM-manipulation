console.log(document.title);

document.title = "Modifying the DOM"
console.log(document.title);

document.body.style.background = "#FF69B4"
console.log (document.body.style.background)

const body = document.getElementsByTagName("body");
for (const child of body) {
  console.log(child.body);
}