/*
 * Задача 10: «Факториал»
 *
 * Напишите функцию factorial(n), возвращающую факториал неотрицательного
 * целого числа. Факториал — это произведение всех натуральных чисел
 * от 1 до n включительно. Факториал 0 равен 1.
 *
*/

function factorial(n=0) {

  if(typeof(n) === 'object') {
    console.warn('Направьте в функцию число, a не ' + typeof(n));
    return n;
  }

  n = parseInt(n);
  if(n<0) return 'Укажите неотрицательное число';

  if(n<2) return 1;
  return factorial(n-1)*n;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log("factorial()", factorial()); // 1
console.log("factorial(1)", factorial(1)); // 1
console.log("factorial('6')", factorial('6')); // 720
console.log("factorial(-6)", factorial(-6));
