---
title: "Remove duplicates from an array"
language: "javascript"
---

const array = [1, 1, 2, 2, 3, 3, 'ReactJS', 'ReactJS']

[...new Set(array)] // [1, 2, 3, 'ReactJS']
