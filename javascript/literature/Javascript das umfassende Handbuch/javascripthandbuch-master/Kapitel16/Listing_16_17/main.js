'use strict';
const promise1 = Promise.resolve('1');
const promise2 = Promise.reject('2');
const promise3 = Promise.resolve('3');
Promise
  .any([promise1, promise2, promise3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(`Error: ${error}`);
  });
// Ausgabe: 1
Promise
  .any([promise2])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(`Error: ${error}`);
  });
// Ausgabe: "Error: AggregateError: All promises were rejected"