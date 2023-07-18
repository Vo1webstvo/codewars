'use strict';

// 1) Делаем заглавную 1 букву

// function capitalizeWord(word) {
//   return word[0].toUpperCase() + word.slice(1);

// }

// console.log(capitalizeWord('wwadasdworld'));

// 2) Округление в большую сторону на примере столетий 1705 год - 18 столетие!

// function century(year) {
//   let num = Math.ceil(+(year / 100));
//   return num;
// }

// console.log(century(2000));

// 3 Число в строку

// function numberToString(num) {
//   // return String(num)
//   return num.toString();

// }

// console.log(numberToString(23))

// 4) Строку в число

// const stringToNumber = function(str){
//   return Number(str);
// }

// console.log(stringToNumber('23'))

// 5)  Число в двоичный формат

// function toBinary(n){
//   return Number(n.toString(2));

// }

// console.log(toBinary(2))

// 6) Если число четное вернет EVEN если нечетное то Odd (остаток от деления )

// function evenOrOdd(number) {
//   return number % 2 === 0 ? 'Even' : 'Odd';
// }

// console.log(evenOrOdd(21))

// 7) Меняем число что придет в x

// function fakeBin(x){
//   let arr = x.toString().split('');
//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i] < 5) {
//       arr[i] = 0;
//     } else if (arr[i] >= 5) {
//       arr[i] = 1;
//     }
//   }
//   return arr.join('');

// // более лучший вариант return x.split('').map(n => n < 5 ? 0 : 1).join('');

// }

// console.log(fakeBin(2317))

// 8) Определить площадь наибольшего квадрата, который может вписаться в круг радиусом r .

// function areaLargestSquare(r) {
//   const d = r * 2;
//   const ab = d/Math.sqrt(2);
//   const area = Math.pow(ab, 2);
//   return +area.toFixed();
// }

// console.log(areaLargestSquare(5))

// 9) Количество цифр в целом числе (в начале нужно сделать из чилес СТРОКУ, а потом уже узнать length)

// function digits(n) {
//   return n.toString().length;

// }

// console.log(digits(123));

// 10) Сделать проивоположность цифре 1: -1,  -33: 33  isInteger() - проверяет является ли целое число

// function opposite(number) {
//   if(number === 0) {
//     return 0;
//   }
//   return -number;

//   // if (Number.isInteger(number)) {
// //   return number >= 1 ? ~number + 1 : number;
// // } else {
// //   return -number;
// // }
// }

// console.log(opposite(0))

// 11)  Перимет квадратов и их количество

// function perimeterSequence(a,n) {
//   return (a * 4) * n;
// }

// console.log(perimeterSequence(1,3))

// 12) Удалить первый и последний символы строки

// function removeChar(str){
//   return str.slice(1, -1)

//  };

//  console.log(removeChar('abracadadv'));

// 13) Удалить пробелы из строки

// function noSpace(x){
//   return x.split(' ').join('');
// }
// console.log(noSpace('asd gf uiy'));

// 14) Если часть окончания строки такая же как следующий аргумент, то endsWith вернет true;

// function solution(str, ending){
//   return str.endsWith(ending);
// }

// console.log(solution('abc', 'bc'));

// 15)

// function simpleMultiplication(number) {
//   return number % 2 === 0? number * 8: number * 9;
// }

// console.log(simpleMultiplication(2))

// 16) ПОВТОР СТРОКИ N раз (Строку умножаем на число - как бы умножаем, напрямую нельзя, получим NaN)

// function repeatStr (n, s) {
//   return s.repeat(n);
// }

// console.log(repeatStr(3, 'Hello'))

// 17)

// function finalGrade (exam, projects) {
//   if(exam > 90 || projects > 10) {
//     return 100;
//   } else if(exam > 75 && projects >= 5) {
//     return 90;
//   } else if(exam > 50 && projects >= 2) {
//     return 75;
//   } else {
//     return 0;
//   }
// }

// console.log(finalGrade(0, 2));

// 18) Светофор цвета

// function updateLight(current) {

//   switch(current) {
//     case 'green':
//       return 'yellow';
//       break;
//     case 'yellow':
//       return 'red';
//       break;
//     case 'red':
//       return 'green';
//       break;
//   }

//   // return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';

// }

// console.log(updateLight('green'))

// 19)

// function otherAngle(a, b) {
//   return 180 - (a + b)
// }

// console.log(otherAngle(45, 55))

//20

// function rentalCarCost(d) {
//   if(d >= 7) {
//     return d * 40 - 50;
//   } else if (d >= 3) {
//     return d * 40 - 20;
//   } else if (d < 3) {
//     return d * 40;
//   } else {}
// }

// console.log(rentalCarCost(9))

// 21) Тип двух чисел

// function typeOfSum(a, b) {
//   return typeof(a + b);
// }

// console.log(typeOfSum(1, 'a'));

// function drawTree(height) {
//     for (let i = 1; i <= height; i++) {
//       let row = '';
//       for (let j = 1; j <= i; j++) {
//         row += '*';
//       }
//       console.log(row);
//     }
//   }

//   drawTree(4);
