---
title: "Convert hex number to decimal number and visa versa"
language: "javascript"
twitter: "@rolandjlevy"
---

const hexToDec = n => parseInt(n, 16).toString(10);
const decToHex = n => parseInt(n, 10).toString(16).padStart(6, '0');

// Example
const blue = "0000ff";
const blueDec = hexToDec(blue); // convert hex to decimal
const blueHex = decToHex(blueDec); // convert decimal back to hex 

console.log(blueDec); // "255" 
console.log(blueHex); // "0000ff"
