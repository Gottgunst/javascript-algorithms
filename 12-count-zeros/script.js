/*
 * Задача 12: «Посчитать количество нулей»
 *
 * Напишите функцию countZeros(n), принимающую на вход натуральное число n.
 * Возвращать функция должна суммарное количество нулей, содержащихся во всех числах от 1 до n включительно.
 *
*/

//101 102 103 104 105 106 107 108 109 110
//1001 1002 1003 1004



function countZeros(n=0) {

  if(n<10) return 0;

  const arr = [];
  for(let i=10;i<=n;i++){
    arr.push(i);
  }

  return arr.join('').match(/0+/g).join('').length;

  // if(n<99) return Math.floor(n/10);
  // if(n<999){
  //   let sum = ;//= Math.floor(n/10);

  //   for(let i=0; i<n/10 ;i++){
  //     sum += countZeros(n/10);
  //   }
  //   return sum;
  // }


  // let rank = 1;   // Номер разряда (начинаем с младших)
  // let res = 0;   // Результат
  // let high = n;  // Число в старших разрядах (изначально равно N)
  // let low = 0;   // Число в младших разрядах (изначально равно 0)

  // while (high > 0)
  // {
  //     let digit = high % 10;  // Текущая цифра
  //     high = high / 10;        // Уменьшаем число в старших разрядах

  //     if (rank > 1 && digit === 0)
  //     {
  //         res += ((high - 1) * rank) + (low + 1);  // Случай 2.2
  //     }
  //     else
  //     {
  //          res += high * rank;  // Случаи 1 и 2.1
  //     }

  //     low += rank * digit;  // Увеличиваем число в младших разрядах
  //     rank *= 10;           // Переходим к следующему разряду
  // }

  // return res;

  // ten = ;


  // if(n>99){
  //   let a = countZeros(n/10); // сотни
  //   let b = Math.floor(n/10); // десятки
  //   let c = 9; //
  //   console.log(a,b, '+c =', a+b+c);
  //   return a+b+c;

}

// Протестируйте решение, вызывая функцию с разными аргументами:

// console.log("20", countZeros(20)); // 2 – два нуля, по одному в числах 10 и 20
// console.log("100", countZeros(100)); // 11 – 11 нулей в числах: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
console.log("110", countZeros(110));//21
console.log("200", countZeros(200));//31
console.log("234", countZeros(234));//43
// console.log("342", countZeros(342));//64
// console.log("1000", countZeros(1000));//192
