---
title: "Use CSS Variables"
language: "css"
twitter: "telmo"
createdAt: "2020-03-31"
---

:root {
  --primary-color: teal;
}

h1 { color: var(--primary-color); }
button { background: var(--primary-color); }
