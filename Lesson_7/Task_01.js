
const amount = +prompt('Введите колличество элементов:');

const numberGenerator = (item) => {

    const arr = [];

    for (let i = 0; i <= item - 1; i++ ) {
        
        arr.push(Math.round(Math.random() * 100));
    };
    return arr;
};

console.log(numberGenerator(amount));