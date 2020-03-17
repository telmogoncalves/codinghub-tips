---
title: "Timed out Promise using Promise.race"
language: "javascript"
---

function networkRequest() {
  // Some quite long network request
  return fetch(...);
}

function timeout() {
  return new Promise((resolve, reject) => {
    setTimeout(
      () => reject('Timed out!'),
      1500 // Time out after 1500ms
    );
  });
}

Promise.race([
  networkRequest(),
  timeout()
]).then(result => /* did not time out */ result)
.catch(error => /* did time out */ error)