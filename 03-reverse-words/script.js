/*
 * Задача 3: «Развернуть слова в предложении»
 *
 * Напишите функцию reverseWords(str), принимающую на вход строку.
 * Функция должна вернуть новую строку, расставив слова в обратном
 * порядке.Если в строке есть знаки препинания, их можно удалить
 * или оставить — на ваше усмотрение.
 *
*/

function reverseWords(str = "", ...arg) {
  const punctuation = '([,.!?—]+)';

  str = str.toString();
  if(arg.length>0) str+=', '+arg.join(', ');

  return  str.replace(new RegExp(punctuation, 'g'), ' $1 ')
              .split(' ')
              .reverse()
              .join(' ')
              .replace(new RegExp('  ' + punctuation + ' ', 'g'), '$1 ');
}

// Протестируйте решение, вызывая функцию с разными аргументами:
console.log(reverseWords('всегда много... путей, достичь цель есть')); // "есть цель достичь путей много всегда"
console.log(reverseWords('испробовать их!! все должны? вы')); // "вы должны все их испробовать"
console.log(reverseWords(250, 21));
console.log(reverseWords('Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos praesentium veritatis eveniet alias nulla aperiam temporibus modi, vel magnam explicabo sit blanditiis aliquid enim nesciunt voluptate commodi architecto natus quae!', 255, true, '', 'заря'));
// console.log(reverseWords());
