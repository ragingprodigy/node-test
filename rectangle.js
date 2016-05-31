'use strict';

class Rectangle {
  constructor(width, height) {
    if (typeof width !== 'number' || typeof height !== 'number') {
      throw new Error('"Width" and "Height" must be numeric');
    }

    if (width <= 0 || height <= 0) {
      throw new Error('A Rectangle must have sides greater than zero');
    }

    this._width = width;
    this._height = height;
  }

  get height() {
    return this._height;
  }

  set height(value) {
    if (typeof value != 'number') {
      throw new Error('"height" must be a number');
    }

    this._height = value;
  }

  get width() {
    return this._width;
  }

  set width(value) {
    if (typeof value !== 'number') {
      throw new Error('"width" must be a number');
    }

    this._width = value;
  }

  get area() {
    return this._width * this._height;
  }

  get circumference() {
    return 2 * this._width + 2 * this._height;
  }
}

module.exports = Rectangle;
