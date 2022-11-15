'use strict';
class Animal {
  #name = 'Max Musterfisch';
  #color = 'Gold';
  #age = '25';
  constructor(name, color, age) {
    this.#name = name ? name : this.#name;
    this.#color = color ? color : this.#color;
    this.#age = age ? age : this.#age;
  }
  get name() {
    return this.#name;
  }
  set name(name) {
    this.#name = name;
  }
  get color() {
    return this.#color;
  }
  set color(color) {
    this.#color = color;
  }
  get age() {
    return this.#age;
  }
  set age(age) {
    this.#age = age;
  }
  eat(food) {
    console.log(`Mmpf mmpf, ${food}`);
  }
  drink(drink) {
    console.log(`Mmmmmmh, ${drink}`);
  }
  toString() {
    return `${this.#name}, ${this.#color}, ${this.#age}`;
  }
}
const snake = new Animal('Zischi', 'Grün', 5);
console.log(snake.name); // "Zischi"
console.log(snake.color); // "Grün"
console.log(snake.age); // 5
// snake.#name = 4711; // SyntaxError
// snake.#color = 'hello world'; // SyntaxError
// snake.#age = 'zwanzig'; // SyntaxError