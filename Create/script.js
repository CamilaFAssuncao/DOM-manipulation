//Modify the script.js to create a new <section> with a random background-color for each learner in your group. This section should contain a paragraph with the name of the learner. Those sections should be appended in the <article>

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


const brightness = (r,g,b) => {
    let brightnessValue = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return brightnessValue;
};

const randomColor = () => {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      brightness(r,g,b)
      let bgColor = "rgb(" + r + "," + g + "," + b + ")";
      return {color: bgColor, brightness: brightness(r,g,b)};
    };
    
    for (let i = 0; i < para2.length; i++) {
        let generatedColor = randomColor()
        para2[i].style.backgroundColor = generatedColor.color;

        if (generatedColor.brightness < 125) {
            para2[i].style.color = "white"
        }
        else {
            para2[i].style.color = "black"
        }
    }

//If the background is dark the text should be white, if the background is light the text should be black

    
    
    
    
    
   
    // const rgbToLightness = (r,g,b) => 
    // 1/2 * (Math.max(r,g,b) + Math.min(r,g,b));
    // return brightness;

    // if (brightness > 180){
    //     return color //white

    //     // else {
    //     //     return color=black
    //     // }

    // }


//if bgColor brightness > 180

    
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
