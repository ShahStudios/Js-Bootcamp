// javascript

// Get a reference to DOM elements
const hexInput = document.getElementById('hexInput');
const inputColor = document.getElementById('inputColor');

// keyup event handler user input on hex code
hexInput.addEventListener('keyup', () => {
    const hex = hexInput.value;
    // Check if hex color is valid
    if(!isValidHex(hex)) return;
    // Update the background color of inputColor
    const strippedHex = hex.replace('#', '');
    inputColor.style.backgroundColor = '#' + strippedHex;
})

const isValidHex = (hex) => {
    // Check if hex color is valid
    if(!hex) return false;
    // Allow Hex input to be length of 3 or 6
    const strippedHex = hex.replace('#', '');
    return strippedHex.length === 3 || strippedHex.length === 6;
}

// update