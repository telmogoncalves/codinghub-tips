---
title: 'Deep check for an object property existence with Optional Chaining'
language: 'javascript'
twitter: 'steveariss'
createdAt: '2020-03-24'
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
