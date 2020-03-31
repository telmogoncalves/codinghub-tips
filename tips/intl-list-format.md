---
title: "Format arrays with Intl.ListFormat"
language: "javascript"
twitter: "telmo",
createdAt: "2020-03-31"
---

const formatList = type => new Intl.ListFormat("en-GB", { type });
const data = ["ReactJS", "VueJS", "Angular"];

formatList("conjunction").format(data); // ReactJS, VueJS and Angular

formatList("disjunction").format(data); // ReactJS, VueJS or Angular
