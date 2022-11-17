'use strict';

const num = +prompt('Введите число для проверки:')

const isPrime = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

const result_02 = isPrime(num);
console.log(result_02);




