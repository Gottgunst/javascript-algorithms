/*
 * Задача 11: «Пересечения массивов»
 *
 * Напишите функцию intersection(arr1, arr2). Она должна принимать
 * на вход два массива целых чисел. Функция должна вернуть новый
 * массив чисел, содержащихся в обоих исходных массивах.
 *
*/

function intersection(arr1, arr2) {

  if(Array.isArray(arr1) && Array.isArray(arr2)) {
    const newArr = [arr1, arr2].map(array => {
      return array.filter((el, index, elArray) => elArray.indexOf(el) === index);
    });

    return newArr[0].filter((el_0) => newArr[1].some(el_1 => el_0 === el_1));
  }
  console.warn(`Передайте в функцию массив, а не ${typeof(arr1)} и ${typeof(arr2)}`);
  return [arr1, arr2];
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])); // [4, 1]
console.log(intersection([1, 5, 4, 2], [7, 12])); // []
console.log(intersection([1, 1, 5, 4, 91, 2], [1, 5, 12, 4, 2]));
console.log(intersection([1, 1, '5', 4.1, 91, 2.33], [1, 5, 12, '4', 2]));
console.log(intersection('[1, 14.1, 91, 2.33]', '[1, 5, 12, 2]'));
