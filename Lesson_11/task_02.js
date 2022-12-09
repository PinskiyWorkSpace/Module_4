'use strict';


const arrNum = [];

const foo = (arr) => {
  const num = Math.round(Math.random() * 10);
  arr.push(num);

  const sum = arr.reduce((acc, item) => acc + item, 0);

  if (sum < 50) {
    return foo(arr);
  } else {
    return arr;
  }
};

console.log(foo(arrNum));
