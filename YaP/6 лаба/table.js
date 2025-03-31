const ageTable = document.getElementById('age-table');

const labelsInTable = ageTable.querySelectorAll('label');

const firstTd = ageTable.querySelector('td');

const searchForm = document.querySelector('form[name="search"]');

const firstInput = searchForm.querySelector('input');

const inputs = searchForm.querySelectorAll('input');
const lastInput = inputs[inputs.length - 1];

console.log('Таблица:', ageTable);
console.log('Элементы label:', labelsInTable);
console.log('Первый td:', firstTd);
console.log('Форма search:', searchForm);
console.log('Первый input:', firstInput);
console.log('Последний input:', lastInput);