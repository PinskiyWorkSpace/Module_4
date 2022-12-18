'use strict';

(() => {
  const FIGURES_RU = ['камень', 'ножницы', 'бумага', 'отмена'];

  const game = () => {
    const result = {
      player: 0,
      computer: 0,
      draw: 0,
    };


    const getRandomInt = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min);
    };


    const filterItems = (arr, query) => {
      arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    };


    return function start() {
      const computerChoice = FIGURES_RU[getRandomInt(0, 3)];
      console.log('computerChoice: ', computerChoice);

      let player = prompt('Камень ножницы или бумага?');
      let surrender;
      if (player === null) {
        player = 'отмена';
        surrender = confirm('точно сдаться?');
      }

      const playerChoice = filterItems(FIGURES_RU, player).join();
      console.log('playerChoice: ', playerChoice);

      switch (true) {
        case surrender === true:
          console.log(`
          Игрок победил ${result.player}
          Компьютер победил ${result.computer}
          Ничья ${result.draw}`);
          break;
        case playerChoice === computerChoice:
          console.log('Ничья');
          result.draw += 1;
          start();
          break;
        case playerChoice === 'камень' && computerChoice === 'ножницы':
        case playerChoice === 'ножницы' && computerChoice === 'бумага':
        case playerChoice === 'бумага' && computerChoice === 'камень':
          console.log('Победа игрока!');
          result.player += 1;
          start();
          break;
        default:
          console.log('Победа компьютера!');
          result.computer += 1;
          start();
      }
    };
  };

  window.RPS = game;
})();
