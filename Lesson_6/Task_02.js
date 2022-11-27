const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

let getAverageValue = Math.round( allCashbox.reduce(( a, b ) => a + b ) / (allCashbox.length));

console.log(getAverageValue);