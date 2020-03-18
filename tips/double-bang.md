---
title: "Double bang"
language: "javascript"
twitter: "telmo"
---

const handler = "@telmo"
const name = null

// Before
console.log(handler ? true : false) // true
console.log(name ? true : false) // false

// After
console.log(!!handler) // true
console.log(!!name) // false
