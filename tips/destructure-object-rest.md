---
title: "Destructure object using rest"
language: "javascript"
---

const profile = {
  name: "Telmo",
  age: 33,
  twitter: "@telmo",
  codingSince: 2007
}

const { age, twitter, ...rest } = profile

age // 33
twitter // @telmo
rest // { name: "Telmo", codingSince: 2007 }
