---
title: "Escape entries while destructuring an array"
language: "javascript"
---

const details = ["33", "Telmo", "@telmo"]

// ,, means you're escaping the 2 first entries
const [,, twitter] = details

twitter // @telmo
