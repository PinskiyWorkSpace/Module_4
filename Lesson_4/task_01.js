'use strict';

const price = +prompt('Сумма покупки в евро:');
const euro = 1.2;
const usa = 73;

const currencyExchange = (price) => {
    const sum = price * euro * usa;
    return sum;
};

const result = currencyExchange(price);
console.log('Стоимость в рублях: ', result);
