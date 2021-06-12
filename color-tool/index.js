// javascript

// Get a reference to DOM elements
const hexInput = document.getElementById('hexInput');
const inputColor = document.getElementById('inputColor');

// keyup event handler user input on hex code
hexInput.addEventListener('keyup', () => {
    const hex = hexInput.value;
    // Check if hex color is valid
    if (!isValidHex(hex)) return;
    // Update the background color of inputColor
    const strippedHex = hex.replace('#', '');
    inputColor.style.backgroundColor = '#' + strippedHex;
})

const isValidHex = (hex) => {
    // Check if hex color is valid
    if (!hex) return false;
    // Allow Hex input to be length of 3 or 6
    const strippedHex = hex.replace('#', '');
    return strippedHex.length === 3 || strippedHex.length === 6;
}

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

const convertRgbToHex = (r, g, b) => {
    const firstParameter = ("0" + r.toString(16)).slice(-2);
    const secondParameter = ("0" + g.toString(16)).slice(-2);
    const thirdParameter = ("0" + b.toString(16)).slice(-2);

    const hex = "#" + firstParameter + secondParameter + thirdParameter;
    return hex;
}
// console.log(convertRgbToHex(0, 55, 55));


