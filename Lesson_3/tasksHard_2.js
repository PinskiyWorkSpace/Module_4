const income = +prompt('Введите свой доход!');

if (income <=15000) {
    const tax = income * 0.13;
    console.log(`Ваш налог ${tax}`);
}

if (income >=15000 && income <=50000) {
    const tax = (income - 15000) * 0.2;
    console.log(`Ваш налог ${tax}`);
}

if (income >= 50000) {
    const tax = (income - 50000) * 0.3;
    console.log(`Ваш налог ${tax}`);
}