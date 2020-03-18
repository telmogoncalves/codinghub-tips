---
title: "Concatenation vs Coercion"
language: "javascript"
twitter: "Jkkr1996"
---
// JS tries to coerce a string into a number in operations with string and number
// Addition operator is an exception, here it coerces the number into a string and concatenates   
const x = "11" + 1;
const y = "11" - 1;

console.log(x); // "111"
console.log(y); // 10
