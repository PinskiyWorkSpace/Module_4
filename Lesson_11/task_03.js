'use strict';

const rectangle = {
  width: 5,
  height: 5,
  result: '',
  get getWidth() {
    return `
    Периметр премоугольника ${this.width * this.height} см.
    Площади прямоугольника ${(this.width + this.height) * 2} см`;
  },
  set setWidth(value) {
    if (typeof value === 'number') {
      this.width = value;
    } else {
      console.log('Ошибка');
    }
  },
  get getHeight() {
    return `
    Периметр премоугольника ${this.width * this.height} см.
    Площади прямоугольника ${(this.width + this.height) * 2} см`;
  },
  set setHeight(value) {
    if (typeof value === 'number') {
      this.height = value;
    } else {
      console.log('Ошибка');
    }
  },
};


rectangle.setWidth = 40;
rectangle.setHeight = 20;
console.log(rectangle.getWidth);
