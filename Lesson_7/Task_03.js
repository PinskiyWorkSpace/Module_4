const amount3 = +prompt('Введите колличество элементов:');
const min3= +prompt('Введите минимальное значение:');
const max3 = +prompt('Введите максимальное значение: ');
const bool = confirm('Вывести четные числа?');

const numberGenerator3 = (item, max, min, logical) => {

    const arrEven = [];
    const arrOdd = [];

    if (logical === true) {
        for (let i = 0; i <= item - 1; i++ ) {
            let num = Math.round(Math.random() * (max - min) + min);
            if ( num % 2 === 0) {
                arrEven.push(num);
            } else {
                i--;
            }
        };
        return arrEven;
    };

    if (logical === false) {
        for (let i = 0; i <= item - 1; i++ ) {
            let num = Math.round(Math.random() * (max - min) + min);
            if ( num % 2 > 0) {
                arrOdd.push(num);
            } else {
                i--;
            }
        };
        return arrOdd;
    };

};

console.log(numberGenerator3(amount3, max3, min3, bool));