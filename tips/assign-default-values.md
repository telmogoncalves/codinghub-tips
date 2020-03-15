---
title: "Assign default values while destructuring"
---

const profile = {
  name: "Telmo",
  age: 33
}

// Set default values
const { age = 27, twitter = "@telmo" } = profile

age // 33
twitter // @telmo
