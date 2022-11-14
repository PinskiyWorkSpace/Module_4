//? Вторая задача:

const rain = Math.round(Math.random());

switch (rain) {
    case 1:
        console.log('Пошёл дождь. Возьмите зонт!');
        break;
    case 0:
        console.log('Дождя нет!');
        break;
};


//? Третья задача:

const maths = +prompt('Введите кол-во баллов по математике:');
const russianLanguage = +prompt('Введите кол-во баллов по русскому языку:');
const informatics = +prompt('Введите кол-во баллов по информатике:');

const points = maths + russianLanguage + informatics;

if (points >= 265) {
    console.log('Поздравляю, вы поступили на бюджет!');
} else {
    console.log('Вы не добрали балов!');
};


//? Четвёртая задача:

const money = +prompt('Сколько денег вы хотите снять?');

const total = money % 100;

if (total === 0) {
    console.log('Открывай карман шире!');
} else {
    console.log('Введите другую сумму!');
}
