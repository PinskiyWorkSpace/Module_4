const amount2 = +prompt('Введите колличество элементов:');
const min2 = +prompt('Введите минимальное значение:');
const max2 = +prompt('Введите максимальное значение: ');


const numberGenerator2 = (item, max, min) => {

    const arr = [];

    for (let i = 0; i <= item - 1; i++ ) {
        
        arr.push(Math.round(Math.random() * (max - min) + min));
    };
    return arr;
};

console.log(numberGenerator2(amount2, max2, min2));