

const text = prompt('Введите любое слово:');

const textTransformation = () => {
    return text[0].toUpperCase() + text.slice(1).toLowerCase();
};

const resultText = textTransformation();
console.log('Строка с большой буквы: ', resultText);