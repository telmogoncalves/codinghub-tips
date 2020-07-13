---
title: "Check if year is a leap year"
language: "javascript"
twitter: "dephraiim"
createdAt: "2020-07-11"
---

const isLeapYear = year => new Date(year, 1, 29).getMonth() === 1;

EXAMPLES

isLeapYear(2019); // false <br>
isLeapYear(2020); // true
