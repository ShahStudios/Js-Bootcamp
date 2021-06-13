// javascript

// Get a reference to DOM elements
const hexInput = document.getElementById('hexInput');
const inputColor = document.getElementById('inputColor');
const slider = document.getElementById('slider');
const sliderText = document.getElementById('sliderText');

// keyup event handler user input on hex code
hexInput.addEventListener('keyup', () => {
    const hex = hexInput.value;
    // Check if hex color is valid
    if (!isValidHex(hex)) return;
    // Update the background color of inputColor
    const strippedHex = hex.replace('#', '');
    inputColor.style.backgroundColor = '#' + strippedHex;
})

// Create function to do catch no valid hex inputs
const isValidHex = (hex) => {
    // Check if hex color is valid
    if (!hex) return false;
    // Allow Hex input to be length of 3 or 6
    const strippedHex = hex.replace('#', '');
    return strippedHex.length === 3 || strippedHex.length === 6;
}

// Create function to convert the hex input into rgb
convertHexToRgb = (hex) => {
    if (!isValidHex(hex)) return null;
    let strippedHex = hex.replace('#', '');

    if (strippedHex.length === 3) {
        strippedHex = strippedHex[0] + strippedHex[0] +
            strippedHex[1] + strippedHex[1] +
            strippedHex[2] + strippedHex[2];
    }

    const r = parseInt(strippedHex.substring(0, 2), 16);
    const g = parseInt(strippedHex.substring(2, 4), 16);
    const b = parseInt(strippedHex.substring(4, 6), 16);

    return { r: r, g: g, b: b }
}
/* Testing 
console.log(convertHexToRgb("000"));
console.log(convertHexToRgb("000000"));
console.log(convertHexToRgb("ffe"));
*/

// Create a function to convert rgb input to hex return
const convertRgbToHex = (r, g, b) => {
    const firstParameter = ("0" + r.toString(16)).slice(-2);
    const secondParameter = ("0" + g.toString(16)).slice(-2);
    const thirdParameter = ("0" + b.toString(16)).slice(-2);

    const hex = "#" + firstParameter + secondParameter + thirdParameter;
    return hex;
}
// console.log(convertRgbToHex(0, 55, 55));

// Create a event listener for the slider 
slider.addEventListener('input', () => {
    sliderText.textContent = `${slider.value}%`;
})

// Increase range between 0 - 255
const increaseRange = (hex, amount) => {
    const newHex = hex + amount;
    if(newHex > 255) return 255;
    if (newHex < 0) return 0;
    return newHex;
}

const alterColor = (hex, percentage) => {
    const rgbValues = convertHexToRgb(hex);
    const amount = Math.floor((percentage/100) * 255);

    const newR = increaseRange(rgbValues.r, amount);
    const newG = increaseRange(rgbValues.g, amount);
    const newB = increaseRange(rgbValues.b, amount);

    console.log({newR, newG, newB});
    return convertRgbToHex(newR, newG, newB);
}




alterColor("fff", 10)