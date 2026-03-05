const userNumber = prompt('Введіть тризначне число');
const a = userNumber[0];
const b = userNumber[1];
const c = userNumber[2];
const allEqual = a === b && b === c;
const hasEqual = a === b || a === c || b === c;
console.log('Чи правда, що всі цифри однакові?', allEqual);
console.log('Чи є серед цифр цифри однакові?', hasEqual);