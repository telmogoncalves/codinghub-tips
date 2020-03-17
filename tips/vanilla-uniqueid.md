---
title: "Vanilla JS version of _.uniqueId"
language: "javascript"
twitter: "gbrlmngr"
---

const uniqueId = (prefix = '', start = 0) => (step = 1) => `${prefix}${start += step}`;

const unique = uniqueId();
unique() // => '1';
unique() // => '2';

const uniqueUser = uniqueId('user_');
uniqueUser() // => 'user_1';
uniqueUser(5) // => 'user_6';

const unique100 = uniqueId('', 100);
unique100() // => '100';
unique100(9) // => '110';
