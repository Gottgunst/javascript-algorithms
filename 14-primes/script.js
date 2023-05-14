/*
 * Задача 14: «Простые числа»
 *
 * Напишите функцию primes(n). Её единственный аргумент — целое число n.
 * Функция должна возвращать массив простых чисел от 2 до n.
 *
*/

function primes(num) {

  if(typeof(num) === 'object' || typeof(num) === 'boolean') {
    console.warn('Направьте в функцию число, a не ' + typeof(num));
    return num;
  }

  num = parseInt(num);
  if(num<2) return [];

  let arr = [0,0];  // создаём массив с начальными данными, чтобы значение было равно индексу

  for(let i=2; i<=num; i++){// наполняем массив до необходимого предела
    arr.push(i);
  }

  //###################
  // Решение перебором
  //###################

  // return arr.filter((number, i, array) => array.every(el => number === el ? true : number % el !== 0));

  //################################
  // Решение через решето Эратосфена
  //################################

  return arr.filter((number,i) => {
      if (number>=2)
        for(let b=i**2; b<=arr.length; b+=i){ // находим все индексы кратные текущему числу, в массиве
          arr[b]=0; // обнуляем найденные числа
        }
      if(number !== 0) // фильтруем результат от нулей
        return  number;
    });
}


// Протестируйте решение, вызывая функцию с разными аргументами:
console.log(primes(6)); // [2, 3, 5]
console.log(primes(17)); // [2, 3, 5, 7, 11, 13, 17]
console.log(primes(12.7));
console.log(primes(1.27));
console.log(primes("23s4a"));
