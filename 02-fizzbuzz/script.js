/*
 * Задача 2: «FizzBuzz»
 *
 * Напишите функцию fizzBuzz(n), принимающую как аргумент натуральное число.
 * Функция должна выводить в консоль числа от 1 до n, заменяя числа:
 *
 * • кратные трём — на fizz;
 * • кратные пяти — на buzz;
 * • кратные и трём, и пяти одновременно — на fizzbuzz.
 *
*/

function fizzBuzz(num) {
  let string = '';

  for(let i=1; i<num+1; ++i){
    if(i % 3 === 0){
      if(i % 5 === 0){
        string +='fizzbuzz ';
      } else {
      string += 'fizz ';}
    } else
    if(i % 5 === 0) {
      string += 'buzz ';
    }
    else {string += i+' ';}

    if(i === num){return string.split(' ')}
  }


}

// Протестируйте решение, вызывая функцию с разными аргументами:
console.log(fizzBuzz(15));
