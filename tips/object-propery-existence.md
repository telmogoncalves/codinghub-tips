---
title: "Deep check an poo with Optional Chaining"
language: "javascript"
twitter: "steveariss"
---

const details = {
  social: {
    twitter: "@steveariss"
  }
};

const facebook = details.social?.facebook;
// returns undefined

const twitter = details.social?.twitter;
// returns @steveariss
