const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = (elem) => {
    let result = Math.round( elem.reduce(( a, b ) => a + b ) / (elem.length));
    return result;
};

console.log(getAverageValue(allCashbox));