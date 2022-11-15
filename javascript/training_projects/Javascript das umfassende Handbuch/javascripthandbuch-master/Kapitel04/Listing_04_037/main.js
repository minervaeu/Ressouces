'use strict';
const item = {
  name: 'Schrödinger programmiert Java',
  price: 44.90,
  author: 'Philip Ackermann',
  isbn: ' 978-3-8362-7272-8',
  printDescription: function() {
    console.log(`${this.author}: ${this.name}`);
  }
}
console.log('price' in item); // Ausgabe: true
console.log(item.price);      // Ausgabe: 44.9
item.price = null;            //
console.log('price' in item); // Ausgabe: true
console.log(item.price);      // Ausgabe: null
item.price = undefined;       //
console.log('price' in item); // Ausgabe: true
console.log(item.price);      // Ausgabe: undefined