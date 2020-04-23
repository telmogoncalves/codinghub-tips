---
title: "filter positive numbers in a array"
language: "javascript"
twitter: "Ivan_Mendieta"
---

// filtering all positive numbers in a array. with a callback function.
const getPositiveArr = (arr) => {
    const positiveIntegers = arr.filter(x => x > 0 );
    return positiveIntegers;
}

// List of Arrays.
const allPositiveIntegers = getPositiveArr([-3, 28, 5, 3, -42,]);

// output Result:
console.log(allPositiveIntegers);
