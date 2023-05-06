/*
 * Задача 1: «Палиндром»
 *
 * Палиндром — это слово, предложение или последовательность символов,
 * которая читается слева направо так же, как и справа налево. Например,
 * «топот» и «Анна» — палиндромы, а «привет» и «Витя» — нет.
 *
 * Напишите функцию palindrome(str), принимающую как аргумент строку.
 * Функция должна вернуть true, если строка — палиндром, и false, если нет.
 *
 * Считайте, что на вход всегда передаётся слово: то есть знаков препинания
 * и пробелов в аргументе быть не может.
 *
*/

function palindrome(str='false') {

  if(str.replace(/s/g,'').length > 0) {
    const equal = str.toLocaleLowerCase().match(/[a-я]|\d|[@#$&]/g,'');
    if(equal){
      return equal.join('') === [...equal].reverse().join('');
    }
    return false;
  }
  return true;
}
// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(palindrome('топот')); // должно быть true
console.log(palindrome('Saippuakivikauppias')); // true
console.log(palindrome('привет')); // false
console.log("1@#22##1", palindrome('1@#22##1'));
console.log("2002", palindrome('!2002'));
console.log(palindrome('О, лета тело!'));
/*
 * Бонус. Задача для любознательных. Пусть функция принимает на вход любую строку,
 * но пробелы и знаки препинания не учитывает. Например:
 *

 *
*/
