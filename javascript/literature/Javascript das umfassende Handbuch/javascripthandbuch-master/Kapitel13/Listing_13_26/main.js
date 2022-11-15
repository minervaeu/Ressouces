'use strict';
class InvalidValueError extends Error {
  constructor(value) {
    super(`Ungültiger Wert: ${value}`);
    this.value = value;
  }
  get value() {
    return this._value;
  }
  set value(value) {
    this._value = value;
  }
}
throw new InvalidValueError(5);