---
title: "filter positive numbers in a array"
language: "javascript"
twitter: "Ivan_Mendieta"
---

// filtering all positive numbers in a array. with a callback function.
const squareList = (arr) => {
    const positiveIntegers = arr.filter(x => x > 0 );
    return positiveIntegers;
}

// List of Arrays.
const squaredIntegers = squareList([-3, 28, 5, 3, -42,]);

// output Result:
console.log(squaredIntegers);
