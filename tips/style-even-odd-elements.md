---
title: "Style Odd and Event child elements"
language: "html",
twitter: "telmo",
createdAt: "2020-03-31"
---

<div class="container">
  <span>Stay</span>
  <span>home!</span>
  <span>Stay</span>
  <span>safe!</span>
</div>

<style>
  .container span:nth-child(odd) { color: teal; }
  .container span:nth-child(even) { color: yellowgreen; }
</style>

