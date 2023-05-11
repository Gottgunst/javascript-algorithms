/*
 * Задача 6: «Уникальные числа»
 *
 * Напишите функцию uniq(arr), принимающую на вход массив целых чисел.
 * Функция должна возвращать массив уникальных чисел, которые содержатся
 * в переданном массиве. То есть, дубликаты должны быть удалены.
 *
*/

function uniq(arr=[]) {

  if(Array.isArray(arr)) {
    arr = arr.map(el => el = parseInt(el));
    return arr.filter((num, index) => arr.indexOf(num) === index );
  }
    console.warn('передайте в функцию массив, а не '+ typeof(arr));
    return arr;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(uniq([1, 2, 5, 4, 2])); // [1, 2, 5, 4]
console.log(uniq([3, 3, 3, 5])); // [3, 5]
console.log(uniq([1, 4, 2, 2, 3, 4, 8])); // [1, 4, 2, 3, 8]
console.log(uniq([0, 5.33, 2.4, 2.5, '3', '4', 'alpha',8]));

console.log(uniq(1,2,3,4,5));
console.log(uniq(true));
console.log(uniq('1, 2, 4, 2, 5, auto, 33'));
console.log(uniq({1:1,2:2,3:3}));


