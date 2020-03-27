---
title: 'Check for even or odd whole numbers with the remainder operator'
language: 'javascript'
twitter: 'steveariss'
createdAt: '2020-03-26'
---

const isOdd = (num) => num % 2 === 1;
const isEven = (num) => num % 2 === 0;

isOdd(1); // True
isOdd(10); // False

isEven(2); // True
isEven(11); // False
