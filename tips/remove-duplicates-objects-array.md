---
title: "Remove duplicates from an array of objects"
---

const array = [
  { name: 'Telmo' },
  { name: 'Telmo' },
  { name: 'Steve' },
  { name: 'Telmo' }
]

const unique = Object.values(array.reduce((a, b) => ({
  ...a,
  [b.name]: b
}), {}))
