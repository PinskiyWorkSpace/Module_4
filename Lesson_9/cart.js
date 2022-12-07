'use strict';

const cart = {
    items: [],
    get totalPrice() {
        return this.calculateItemPrice();
    },
    getPrice:[], // добавил массив что бы хранить цену и использовать reduce
    count: 0,
    
    add(item, price, n = 1) {
        this.items.push(item);
        this.getPrice.push(price * n);
        this.count = this.count + n;
    }, 
    increaseCount(n) {
        return this.count = this.count + n;
    },
    calculateItemPrice() {
        return this.getPrice.reduce((acc, item) => {
            return acc + item;
        }, 0);
    },
        
    clear() {
        this.items = [];
        this.totalPrice = 0 ;
        this.count = 0 ;
    },
    print() {
        console.log(JSON.stringify(this.items));
        console.log(this.totalPrice);
    },
};

cart.add('samsung', 30000, 5);
cart.add('nokia', 17000, 2);
cart.add('ihone', 50000, 3);

cart.print();


