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

function fizzBuzz(num = 0) {

  num = parseInt(num);

  for(let i=1; i<num+1; i++){

    const n = (i) => {
      if(i%3===0 && i%5===0)
        return 'кратно 3 и 5';
      if(i%3===0)
        return 'кратно 3';
      if(i%5===0)
        return 'кратно 5';
      return '';
    };

    switch (n(i)) {
      case 'кратно 3':
        console.log('fizz');
        break;
      case 'кратно 5':
        console.log('buzz');
        break;
      case 'кратно 3 и 5':
        console.log('fizzbuzz');
        break;
      default:
        console.log(i);
        break;
    }

    // ####### Простое решение #######

    // if(i % 3 === 0){
    //   if(i % 5 === 0){
    //     console.log('fizzbuzz');
    //   }
    //   else {
    //     console.log('fizz');}
    // } else
    //   if(i % 5 === 0) {
    //   console.log('buzz');
    // } else {
    //   console.log(i);
    // }
}
}

// Протестируйте решение, вызывая функцию с разными аргументами:
fizzBuzz(10);
