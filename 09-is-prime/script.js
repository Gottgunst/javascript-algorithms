/*
 * Задача 9: «Простое число»
 *
 * Напишите функцию isPrime(n) для проверки, простое число n или нет.
 * Напомним, что число называют простым, если оно больше 1 и делится
 * без остатка только на 1 и на само себя.
 *
 * На вход функция должна принимать число n и возвращать true,
 * если n простое, и false — если нет.
*/

function isPrime(n=0) {

  if(typeof(n) === 'object') {
    console.warn('Направьте в функцию число, a не ' + typeof(n));
    return n;
  }

  n = parseInt(n);

  if(n < 2) return false;

  for(let i=2; i<=Math.sqrt(n); i++){
      if(n % i === 0) return false;
  }

  return true;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log("isPrime()",isPrime()); // false
console.log("isPrime(1)",isPrime(1)); // false
console.log("isPrime(3)",isPrime(3)); // true
console.log("isPrime(6)",isPrime(6)); // false
console.log("isPrime(17)",isPrime(17)); // true
console.log("isPrime('67')", isPrime('67'));
console.log("isPrime('130aa37')", isPrime('130aa37'));
console.log("isPrime({a:22}})", isPrime({a:22}));

