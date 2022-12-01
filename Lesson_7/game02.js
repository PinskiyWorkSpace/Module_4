const startHardGame = () => {
    const min = +prompt('Введите минимальное число');
    const max = +prompt('Введите максимальное число');
    let count = Math.round((max - min) * 0.3);
    alert(`Колличество попыток: ${count}`);

    const hiddenNumber = Math.round(Math.random() * (max - min) + min);
    console.log('hiddenNumber: ', hiddenNumber);

    const arr = [];

    let userNumber = +prompt('Попробуйте отгадать число от 1 до 100');
    arr.push(userNumber);
    console.log(arr);
    count--;
    
    while (userNumber != 0) {
        if (isNaN(userNumber)) {
            userNumber = prompt('Введите число');
            
            
        } else if (userNumber < hiddenNumber && count > 0) {
            userNumber = +prompt('Загаданное число больше!');
            let сheck = arr.includes(userNumber);
            arr.push(userNumber);
            console.log(arr);
            count--;
                if (сheck === true) {
                    arr.pop(userNumber);
                    userNumber = +prompt('Такое число уже есть:');
                    arr.push(userNumber);
                    count++;
                }
        } else if (userNumber > hiddenNumber && count > 0) {
            userNumber = +prompt('Загаданное число меньше!');
            сheck = arr.includes(userNumber);
            arr.push(userNumber);
            console.log(arr);
            count--;
                if (сheck === true) {
                    arr.pop(userNumber);
                    userNumber = +prompt('Такое число уже есть:');
                    arr.push(userNumber);
                    count++;
                }
        } else if (count === 0) {
            alert ('Попытки закончились!');
            break;
        } else {
            alert('Правильно!');
            break;
        }
        console.log('arr: ', arr);
    }
}

startHardGame();
