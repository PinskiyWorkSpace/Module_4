'use strict';

(() => {
  const FIGURES_END = ['rock', 'scissors', 'papper'];
  const FIGURES_RU = ['камень', 'ножницы', 'бумага'];


  const getRandomIntInclusive = () => Math.random();


  const getFigure = lang => {

  };

  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
    };

    const compNumFoo = (x) => {
      let compNum = x;
      if (compNum < 0.34) {
        compNum = 'камень';
        return compNum;
      } else if (compNum < 0.68) {
        compNum = 'бумага';
        return compNum;
      } else {
        compNum = 'ножницы';
        return compNum;
      }
    };


    return function start() {
      const humanNum = prompt('Камень, ножницы или бумага?');
      const check = (human, comp) => {
        if (human !== null) {
          if (human === 'камень' && comp === 'камень' || human === 'бумага' && comp === 'бумага' || human === 'ножницы' && comp === 'ножницы') {
            alert('Ничья');
            start();
          } else if (human === 'камень' && comp === 'ножницы' || human === 'бумага' && comp === 'камень' || human === 'ножницы' && comp === 'бумага') {
            result.player += 1;
            alert('Победа игрока');
            start();
          } else {
            result.computer += 1;
            alert('Победа Компьютера');
            start();
          }
        } else {
          human = prompt('Точно выходим?');
          if (human !== null) {
            check(human, comp);
          } else {
            alert('До скорой встречи!');
            alert(`Вы победили ${result.player} \nКомпьютер победил ${result.computer}`);
          }
        }
      };

      check(humanNum, compNumFoo(getRandomIntInclusive()));
    };
  };

  window.RPS = game;
})();
