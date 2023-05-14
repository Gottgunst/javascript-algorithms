/*
 * Задача 12: «Посчитать количество нулей»
 *
 * Напишите функцию countZeros(n), принимающую на вход натуральное число n.
 * Возвращать функция должна суммарное количество нулей, содержащихся во всех числах от 1 до n включительно.
 *
*/

function countZeros(n=0) {

  if(typeof(n) === 'object' || typeof(n) === 'boolean') {
    console.warn('Направьте в функцию число, a не ' + typeof(n));
    return n;
  }

  n = parseInt(n);
  if(n<10) return 0;

  // #################
  // решение перебором
  // #################


  const arr = [];
  for(let i=10;i<=n;i++){
    arr.push(i);
  }

  return arr.join('').match(/0+/g).join('').length;

  // ####################
  // решение подстановкой от страших к младшим разрядам — не получилось… =\
  // ####################
  /*
  const arr = n.toString()
                .split('')
                .map(el => el = parseInt(el)); //превращаем число в массив цифр
  arr.unshift(-1); // добавляем вначале массива -1, чтобы reduce работал со всеми нужными данными

  let zeros = 0; // считаем кол-во нулей в заданном числе

  return arr.reduce((prev, curr, index, array) => {
    const order = 10 ** (array.length - index - 2); // разряд с которым сейчас работаем, минус компенсация по длине массива
    const factor = array.length - index - 1; // множитель, например для сотен →2, для тысяч →3, для десятков тысяч →4 и т.д.
    const pack = order * factor; // разность в кол-ве нулей между единицами разряда, например от 1000 до 2000 храниться ровно →300 нулей (192 и 492 соответственно)
    let rider = arr.map((el,i)=>{return i})
                    .join('')
                    .slice(1)
                    .slice(0,-index);
    rider = parseInt(rider === "" ? 0 : rider); // прогрессия 1234… и т.д., разница между числом хранящим круглое значение нулей и ближайшим круглым числом например 1000 и 1090 (192 и 300 нулей), разница между ними 9*12 нулей

    let sum = 0;
    const lastPosition = index === array.length-2;
    const prevNum = array[index-1];
    const nextNum = array[index+1];

    if(index === 1) // пропускаем работу для первого разряда
      return pack * curr;
    if(index === array.length-1) // пропускаем подстановку с последней цифрой числа
      return prev;


    if(curr === 0){
      zeros+=1;

      if(lastPosition && nextNum !== 0) // работаем с последними разрядами
        sum += nextNum;

      if(prevNum !== 0) // если предыдущий разряд был не нулевым, вычитаем
        sum -= 9 * rider;

    } else {

      if(prevNum === 0)
        sum += zeros * curr;

      // if(lastPosition && nextNum === 0 && prevNum === 0) // работаем с последними разрядами
      //   sum += 9 + curr;


      // if(curr>)
      // (9 * curr)

      // if(!lastPosition && nextNum ===0)
      //   sum += zeros * 9;

      // if(array[index-1] ==! 0){
      // }

      // if(array[index-1] === 0){ // если предыдущий разряд был нулевым
      //   // console.log(zeros);
      //   sum += (zeros * order) + (pack * curr);
      // }

      sum += pack * curr;
    }

    return sum += prev;
  });
  */


  // ####################
  // решение подстановкой от младших к старшим разрядам…— не осилил =\
  // ####################
  /*
  const arr = n.toString()
                .split('')
                .map(el => el = parseInt(el)); //превращаем число в массив цифр

  let order = 1; // начальный разряд
  const rider = arr.map((el,i)=>{return i}).join(''); // прогрессия 1234… и т.д., разница между числом хранящим круглое значение нулей и ближайшим круглым числом например 1000 и 1090 (192 и 300 нулей), разница между ними 9*12 нулей
  const low = arr[arr.length-1]; // число в младшем разряде
  let sum = 0;

  return arr.reduceRight((prev, curr, index, array) => {

    const factor = array.length - index - 1; // множитель, например для сотен →2, для тысяч →3, для десятков тысяч →4 и т.д.
    const pack = order * factor; // разность в кол-ве нулей между единицами разряда, например от 1000 до 2000 храниться ровно →300 нулей (192 и 492 соответственно)
    let unpack = rider.slice(0,-index);

    unpack = unpack === "" ? 1 : parseInt(unpack);

    console.log("PACK:",pack ,"unpack", unpack);
    console.log("curr:", curr," prev:", prev);

    if(prev===0)

    sum += curr*pack;


    // if(order > 1 && prev == 0)
    // {
    //     sum += ((curr - 1) * order) + (low + 1);  // Случай 2.2
    // }
    // else
    // {
    //      sum += prev * pack;  // Случаи 1 и 2.1
    //      console.log(prev, pack);
    // }

    // low += order * prev; // в младших разряда увеличиваем число
     // повышаем разряд

    order *= 10;
    return sum;
  });
  */
}

// Протестируйте решение, вызывая функцию с разными аргументами:

// console.log("20", countZeros(20)); // 2 – два нуля, по одному в числах 10 и 20
// console.log("100", countZeros(100), "11"); // 11 – 11 нулей в числах: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
// console.log("109", countZeros(109), "20"); // 20
// console.log("200", countZeros(200),"31");
// console.log("132", countZeros(132),"23");
// console.log("232", countZeros(232),"43");
// console.log("342", countZeros(342),"64");
// console.log("999", countZeros(999),"189");
// console.log("1000", countZeros(1000),"192");
// console.log("1002", countZeros(1002),"194");
// console.log("1090", countZeros(1090),"300");
// console.log("1010", countZeros(1010),"212");
// console.log("1100", countZeros(1100),"311");
// console.log("1110", countZeros(1110),"321");
// console.log("1112", countZeros(1112),"321");
// console.log("2090", countZeros(2090),"600");
// console.log("2576", countZeros(2576),"707");
// console.log("2706", countZeros(2706),"737");
// console.log("2076", countZeros(2076),"584");
// console.log("3000", countZeros(3000),"792");
// console.log("4000", countZeros(4000),"1092");
// console.log("10000", countZeros(10000),"2893");
// console.log("1030836", countZeros(1030836),"542837");
// console.log("20000", countZeros(20000),"6893");
// console.log("1030450", countZeros(1030450),"541987");
// console.log("1000000", countZeros(1000000),"488895");
// console.log("1232", countZeros(1232),"343");

