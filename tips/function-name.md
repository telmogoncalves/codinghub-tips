---
title: "Return the name of a function"
language: "javascript"
twitter: "dephraiim"
createdAt: "2020-07-16"
---

const functionName = fn => (console.log(fn.name), fn);

functionName(Math.max); // max (logged in console)
