---
title: 'Use `<picture>` for progressive enhancement of modern image formats'
language: 'html'
twitter: 'steveariss'
createdAt: '2020-03-25'
---

<picture>
  <source srcset="/images/wookie.webp" type="image/webp" />
  <source srcset="/images/wookie.jp2" type="image/jp2" />
  <img src="/images/wookie.jxr" type="image/vnd.ms-photo" />
</picture>
