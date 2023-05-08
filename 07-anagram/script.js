/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 *
*/

function anagram(str1, str2) {

  if(typeof(str1) === 'string' && typeof(str2) === 'string'){

    const arr = [str1, str2].map(str => {
      return str.replace(/\s+/g, '')
        .replace(/[,.!?—]+/g, '')
        .toLocaleLowerCase()
        .split('')
        .sort()
        .join('');
    });

    const str = arr[0];
    return arr.every(el => el===str) ? true : false;
  }

  else console.warn('передайте две строки, а не '+ typeof(str1) + ' и ' + typeof(str2));
  return [str1,str2];

}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false
console.log(anagram('up', 'UP'));
console.log(anagram('Аз есмь строка, живу я, мерой остр', 'За семь морей ростка я вижу рост'));
console.log(anagram('Лорд'));
