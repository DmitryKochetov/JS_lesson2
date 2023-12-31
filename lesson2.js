// Задание 1
// Создать переменные num1, num2 которые пользователь вводит с клавиатуры
// Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.

let num1 = prompt("Введите переменную 1");
let num2 = prompt("Введите переменную 2");

if (num1 <= 1) {
  alert("переменная 1 меньше или равна 1");
}

if (num2 >= 3) {
  alert("переменная 2 больше или равна 3");
}

//     Задание 2
// Перепишите код к тернарному оператору

// let test = true;
// if (test === true) {
// console.log('+++');
// } else {
// console.log('---');
// }

let test = false;
console.log(test === true ? "+++" : "---");

// Задание 3
// В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

let day = 27;

//решение через if

if (day <= 10) {
  console.log(`день ${day} попадает в первую декаду`);
}
if (day <= 20 && day > 10) {
  console.log(`день ${day} попадает во вторую декаду`);
}
if (day <= 30 && day > 20) {
  console.log(`день ${day} попадает в третью декаду`);
}

//решиние через switch

switch (true) {
  case day <= 10: {
    console.log(`день ${day} попадает в первую декаду`);
    break;
  }
  case day <= 20 && day > 10: {
    console.log(`день ${day} попадает во вторую декаду`);
    break;
  }
  case day <= 30 && day > 20: {
    console.log(`день ${day} попадает в третью декаду`);
    break;
  }
  default: {
    console.log(`день ${day} указан некорректно`);
    break;
  }
}

// Задание 4
// Необязательное задание. (Если вам показалось домашнее задание простым, выполняем данный пункт)
// (Для решения задания вам потребуется оператор остаток от деления %, например 10%3 === 1 , десять разделить на 3, остаток 1, второй пример 7 % 5, тут остаток от деления будет 2, ну и 3 пример это 14 % 10 === 4, остаток от деления на 10 будет равен 4)

// Необходимо от пользователя получить число.
// Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.

// Пример:
// Пользователь ввел число 163. Программа должна вывести:
// "В числе 163 количество сотен: 1, десятков: 6, единиц: 3"

// Пример 2:
// Пользователь ввел число 74. Программа должна вывести:
// "В числе 74 количество сотен: 0, десятков: 7, единиц: 4"

// Пример 3:
// Пользователь ввел число 9537. Программа должна вывести:
// "В числе 9537 количество сотен: 5, десятков: 3, единиц: 7"

// Уточнение: пользователь всегда вводит корректное положительное целое число.

let number = prompt(
  "ВВедите целое число меньше 10000 и больше 0, а я скажу сколько в нем разрядов"
);

let hundreds = Math.floor(number / 100);
let dozens = Math.floor((number % 100) / 10);
let units = number % 10;
console.log(
  `В числе ${number} количество сотен: ${hundreds}, десятков: ${dozens}, единиц: ${units}`
);
