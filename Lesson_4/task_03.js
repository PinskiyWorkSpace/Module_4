'use strict';


const calculate = (total, quantity, promo) => {
    
    let calcTotal = total;

    if (quantity > 10) {
        calcTotal = total - total * 0.03;
    }

    if (total > 30000) {
        calcTotal -= (total - 30000) * 0.15;
    }

    if (promo === 'METHED') {
        calcTotal -= total * 0.1;
    }

    if (promo === 'G3H2Z1' && calcTotal > 2000) {
        calcTotal -= 500;
    }

    console.log('стоимость корзины после применения всех акций и скидок: ', calcTotal);
};

calculate(1000, 15, 'METHED');

