/*
 * Задача 8: «Фибоначчи»
 *
 * Последовательность Фибоначчи — это порядок чисел, где каждое последующее
 * число является суммой двух предыдущих: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
 *
 * Напишите функцию, которая принимает на вход число n и возвращает n-й элемент
 * последовательности Фибоначчи.
*/

function fibonacci(n=0) {

  if(typeof(n) === 'object' || typeof(n) === 'boolean'){
    console.warn('Направьте в функцию число, a не ' + typeof(n));
    return n;
  }
  else {
    n = parseInt(n);
    n ? n : n = 0;

    if(n < 2){
      return 0;
    }
    if (n === 2){
      return 1;
    }
    else {
      return fibonacci(n-2) + fibonacci(n-1);
    }
  }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log("fibonacci(4)", fibonacci(4)); // 2. Четвёртое число последовательности — двойка (0, 1, 1, 2)
console.log("fibonacci()", fibonacci());
console.log("fibonacci('10')", fibonacci('10'));
console.log("fibonacci('sd')", fibonacci('sd'));
console.log("fibonacci('0')", fibonacci('0'));
console.log("fibonacci('')", fibonacci(''));
