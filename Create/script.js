let para = document.createElement ("p")
let section = document.createElement ("section")
let article = document.createElement ("article")

section.appendChild(para)
article.appendChild(section)
document.body.appendChild(article)

// para.appendChild(article)
// section.appendChild(para)
// document.body.appendChild(section)


const textNode = document.createTextNode("Camila");
para.appendChild(textNode);

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




    
//     const randomColor = () => {
//         let color = Math.floor(Math.random()*16777215).toString(16)
    
//         /* sometimes the returned value does not have 
//          * the 6 digits needed, so we do it again until
//          * it does 
//          */
    
//         while (color.length<6) {
//           color = Math.floor(Math.random()*16777215).toString(16)
//         }
    
//         let red = parseInt(color.substring(0,2),16)
//         let green = parseInt(color.substring(2,4),16)
//         let blue = parseInt(color.substring(4,6),16)
//         let brightness = red*0.299 + green*0.587 + blue*0.114
    
//         // if ((red*0.299 + green*0.587 + blue*0.114) > 180)
//         //  use #000000 else use #ffffff 
         
    
//         if (brightness > 180) {
//           return { backgroundColor: '#' + color }
//         }
//         else return {
//           backgroundColor: '#' + color,
//           color: '#ffffff'
//         }
//     }
