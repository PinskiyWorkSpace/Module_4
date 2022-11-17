'use strict';

const reverseString = (string) => {
    let newString = '';
    for(let i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    return newString;
};
const result_03 = reverseString('Привет мир');
console.log('result: ', result_03);
