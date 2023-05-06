/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str = '', ...arg) {
    // Напишите код здесь
  str = str.toString();
  if(arg.length>0) str+=', '+arg.join(', ');

  return str.replace(/\s+/g,' ')
            .split(' ')
            .map(word => word ? word = word[0].toLocaleUpperCase() + word.slice(1) : '')
            .join(' ');

}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"
console.log(capitalize());
console.log(capitalize(' '));
console.log(capitalize(' ',12, "pfdas sasd 3f dssdad 33 sa"));
