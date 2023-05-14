/*
 * Задача 13: «Сумма двух»
 *
 * Напишите функцию sumOfTwo(arr, num). Её аргументы: массив целых чисел arr
 * и целое число num. Функция должна вернуть true, если в переданном массиве
 * есть какие-то два числа, чья сумма равна num. Если же такой пары чисел нет,
 * функция должна вернуть false.
 *
*/

function sumOfTwo(arr=[], sum=0) {
    // Напишите код здесь
    if(Array.isArray(arr) && typeof(sum)!=="object" && typeof(sum)!=="boolean") {

      sum = parseInt(sum);

      return arr.some((el,i,array)=>{
        debugger
        return array.slice(i+1).some(num =>{

          if(sum === el + num) return true;
          return false;

        });
      });
    }
    console.warn(`Передайте в функцию массив и число, а не ${Array.isArray(arr) ? "array" : typeof(arr)} и ${typeof(sum)}`);
    return [arr, sum];
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(sumOfTwo([1, 2, 3, 4, 5], 4)); // true (так как 1 + 3 === 4)
console.log(sumOfTwo([1, 2, 3, 4, 5], 100)); // false
console.log(sumOfTwo([1, 5], 10)); // false
