'use strict';

const hiddenNumber2 = Math.round(Math.random() * 100);
console.log('hiddenNumber2: ', hiddenNumber2);
let userNumber2 = +prompt('Попробуйте отгадать число от 1 до 100');

const game2 = () => {
  if (userNumber2 !== 0) {
    if (isNaN(userNumber2)) {
      userNumber2 = prompt('Введите число');
      return game2();
    } else if (userNumber2 < hiddenNumber2) {
      userNumber2 = +prompt('Загаданное число больше!');
      return game2();
    } else if (userNumber2 > hiddenNumber2) {
      userNumber2 = +prompt('Загаданное число меньше!');
      return game2();
    } else {
      alert('Правильно!');
      return hiddenNumber2;
    }
  } else {
    alert('Отказался сам!');
  }
};


console.log(game2());


