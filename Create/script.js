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

// Select all the <p> elements on the webpage and store them in the variable "para2"
const para2 = document.querySelectorAll("p");

// Define a function called "brightness" that takes in three parameters: r, g, and b
const brightness = (r, g, b) => {
  // Calculate the brightness value based on the formula (r * 299 + g * 587 + b * 114) / 1000
  let brightnessValue = ((r * 299) + (g * 587) + (b * 114)) / 1000;
  // Return the calculated brightness value
  return brightnessValue;
};

// Define a function called "randomColor"
const randomColor = () => {
  // Generate random values for r, g, and b between 0 and 255
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  // Call the "brightness" function and pass in the random r, g, and b values
  brightness(r, g, b);

  // Create a string representation of the generated color using the random r, g, and b values
  let bgColor = "rgb(" + r + "," + g + "," + b + ")";
  
  // Return an object containing the generated color and its brightness value
  return { color: bgColor, brightness: brightness(r, g, b) };
};

// Loop through each element in the "para2" array
for (let i = 0; i < para2.length; i++) {
  // Generate a random color using the "randomColor" function
  let generatedColor = randomColor();

  // Set the background color of the current element to the generated color
  para2[i].style.backgroundColor = generatedColor.color;

  // Check if the brightness value of the generated color is less than 125
  if (generatedColor.brightness < 125) {
    // If the brightness is low, set the text color of the current element to white
    para2[i].style.color = "white";
  } else {
    // If the brightness is high, set the text color of the current element to black
    para2[i].style.color = "black";
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
