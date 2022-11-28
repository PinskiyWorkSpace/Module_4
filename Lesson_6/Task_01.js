
const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

const passedStudents = (all, failed) => {
    let passed = all.filter( elem => !failed.includes(elem));
    return passed;
};

console.log(passedStudents(allStudents, failedStudents));





