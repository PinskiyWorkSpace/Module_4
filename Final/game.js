'use strict';

(() => {
  const marble = () => {
    const result = {
      player: 5,
      computer: 5,
    };

    const getRandomIntInclusive = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
    };


    return function start() {
      let player = prompt('Введите число шаров');
      console.log('player: ', player);

      const getPlayer = () => {
        if (!isNaN(player)) {
          if (player === null) {
            player = confirm('exit?');
            if (player) {
              alert(`Всего доброго!!!`);
            } else {
              start();
            }
          } else if (player === '' || player < 1) {
            player = prompt('Попробуйде ввести правильное число шаров!');
          } else if (player > result.player) {
            player = prompt('Не хватает шаров!');
            getPlayer();
          }
      } else {
        player = prompt('Вы ввели не число!');
        getPlayer();
      };
    };
      getPlayer();


      const comp = getRandomIntInclusive(1, result.computer);
      console.log('comp: ', comp);

      if (comp % 2 === 0) {
        if (player % 2 === 0) {
          alert('Чет!')
          result.player -= +player;
          result.computer += +player;
          alert(`Компьютер угадал!
          Шариков у игрока ${result.player}
          Шариков у компьютера ${result.computer}`)
        };
      } else {
        alert('Нечет!')
        result.player += +player;
        result.computer -= +player;
        alert(`Игрок угадал!
        Шариков у игрока ${result.player}
        Шариков у компьютера ${result.computer}`)
      };

      if (result.computer <= 0) {
        alert('Подедил игрок');
      } else if (result.player <= 0) {
        alert('Подедил компьютер');
      } else if (player === true) {
        return;
      } else {
        start();
      }
    };
  };

  window.RPS = marble;
})();
