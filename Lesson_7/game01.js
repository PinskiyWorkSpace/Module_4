
const startGame = () => {
    const hiddenNumber = Math.round(Math.random() * 100);
    console.log('hiddenNumber: ', hiddenNumber);

    let userNumber = +prompt('Попробуйте отгадать число от 1 до 100');

    while (userNumber != 0) {
        if (isNaN(userNumber)) {
            userNumber = prompt('Введите число');
        } else if (userNumber < hiddenNumber) {
            userNumber = +prompt('Загаданное число больше!');
        } else if (userNumber > hiddenNumber) {
            userNumber = +prompt('Загаданное число меньше!');
        } else {
            alert('Правильно!');
            break;
        }
    }
}

startGame();



