---
title: "Get rid of falsy values from an array"
language: "javascript"
twitter: "telmo"
---

const array = [false, 'NextJS', undefined, 'React', null]

array.filter(Boolean) // ['NextJS', 'React']
