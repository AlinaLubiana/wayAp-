// LESSON 1
/* 
    Задание 1:

    Вам необходимо поделиться информацией о вашем родном городе. Все данные необходимо записать в отдельную переменную.
    Информация о городе: 
    - Название города (строка)
    - В какой стране находится этот город (строка)
    - Численность населения (число)
    - Есть ли футбольный стадион (boolean [ true(да) / false(нет) ])
*/
// let city = 'Poznań';
// console.log(city);

// let country = 'Poland';
// console.log(country);

// let numPopulation = 540365;
// console.log(numPopulation);

// var stadium = 'true';
// if (stadium) {
//   console.log('true(да), здесь есть стадион');
// } else {
//   console.log('false(нет), здесь нет стадиона');
// }


/* 
    Задание 2:
    
    Напишите скрипт, который находит площадь прямоугольника

    - высота 40см
    - ширина 70см

    ps: каждая сущность должна находиться в отдельной переменной
*/
// let height = 40;
// let width = 70;
// let areaRectangle = height * width;
// console.log(areaRectangle);


/* 
    Задание 3:
    
    Два автомобиля одновременно выехали навстречу друг другу из двух городов и встретились через 2 часа.
    Первый ехал со скоростью 95км/ч, а второй 114км/ч.

    Цель: Выяснить на каком расстоянии находятся города друг от друга и после всех вычеслений записать результат в переменную.

    Исходные данные: 
    time = 2;
    speedOfFirst = 95;
    speedOfSecond = 114;

*/
// time = 2;
// speedOfFirst = 95;
// speedOfSecond = 114;

// generalSpeed = speedOfFirst + speedOfSecond;
// console.log(generalSpeed);

// result = generalSpeed * time;
// console.log(result);


/* 
    Задание 4:
    
    Перед вами код:
    const randomNumber = Math.floor(Math.random() * 100);

    Этот код при каждом обновлении страницы генерирует случайное число и записывает его в переменную randomNumber.

    Напишите условную конструкцию, со следующими данными:
    - если randomNumber меньше 20, то выведите в консоль сообщение : "randomNumber меньше 20"
    - если randomNumber больше 50, то выведите в консоль сообщение : "randomNumber больше 50"
    - если ни один из вариантов не совпал, то выведите в консоль сообщение : "randomNumber больше 20, и меньше 50"
*/
// const randomNumber = Math.floor(Math.random() * 100);
// console.log(randomNumber);

// if(randomNumber < 20){
//     console.log('randomNumber меньше 20');
// } else if(randomNumber > 50) {
//     console.log('randomNumber больше 50');
// } else {
//     console.log('randomNumber больше 20, и меньше 50');
// }


/* 
    Задание 5:
    
    Условную конструкцию из задания 4, перепишите с помощью Switch Case
*/

// const randomNumber2 = Math.floor(Math.random() * 100);
// console.log(randomNumber2);

// switch(true) {
//     case (randomNumber2 < 20) :
//         console.log('randomNumber2 меньше 20');
//         break;
//     case (randomNumber2 > 50) :
//     console.log('randomNumber2 больше 50');
//     break;
//     default :
//         console.log('randomNumber2 больше 20, и меньше 50');
// }





// LESSON 2
/* 
    Задание 1:

    Вывести в консоль с помощью цикла FOR все четные числа от 10 до 50
*/
for (let i = 10; i <= 50; i++) {
    if (i % 2 == 0) {
      alert(i);
    }
console.log(i);
  }


/* 
    Задание 2:

    Необходимо создать объект в котором вы опишите самого себя в формате : "свойство: значение"

    Список свойств:

    - Имя(string)
    - Фамилия(string)
    - Возраст(number)
    - Есть ли домашние животные(boolean)
*/
const mySelf = {
    firstName : 'Alina',
    lastName : 'Lubiana',
    yearsOld : 35,
    hasPet: true
}
console.log(mySelf);


/* 
    Задание 3:

    Отрывок из текста А.С Пушкин, Капитанская дочка был разбит на небольшие кусочки и помещен в массив. 
    Необходимо собрать этот текст из массива и придать ему первоначальный вид.

    Текст до разбивки на части:

    "В ту же ночь приехал я в Симбирск, где должен был пробыть сутки для закупки нужных вещей,
    что и было поручено Савельичу. Я остановился в трактире. Савельич с утра отправился по лавкам"

    Массив: 
    const array = [
        'я в Симбирск,',
        'в трактире.',
        'с утра',
        'В ту же ночь',
        'Я остановился',
        'для закупки', 
        'что и было поручено Савельичу.',
        'приехал,',
        'где должен был',
        'нужных вещей',
        'отправился по лавкам',
        'пробыть сутки',
        'Савельич'
    ]

   итоговый текст должен быть собран из массива array и результат записать в переменную result
*/
const srcText = "В ту же ночь приехал я в Симбирск, где должен был пробыть сутки для закупки нужных вещей что и было поручено Савельичу. Я остановился в трактире. Савельич с утра отправился по лавкам";

const array = [
    'я в Симбирск,',
    'в трактире.',
    'с утра',
    'В ту же ночь',
    'Я остановился',
    'для закупки',
    'что и было поручено Савельичу.',
    'приехал',
    'где должен был',
    'нужных вещей',
    'отправился по лавкам',
    'пробыть сутки',
    'Савельич'
];

let words = srcText.split(" ");
let result = "";
let part = "";
for(let i = 0; i < words.length; ++i){
  part += part ? " " + words[i] : words[i];
  let item = array.find(it => it === part);
  if(item){
    result += part + " ";
    part = "";
  }
}
console.log(result);


/* 
    Задание 4:

    Напишите функцию, в теле которой будет находится следующий код:

    const fullName = `${firstName} ${lastName}`;
    console.log(fullName);

    firstName и lastName - это параметры функции

    При вызове функции передайте ей, в качестве аргумента, свое имя и фамилию.
*/
function MyFullName(firstName, lastName) {
    console.log(`My full name: ${firstName} ${lastName}`);
    }
    
MyFullName("Alina", "Lubiana");


/* 
    Задание 5:

    Вывести в консоль с помощью цикла WHILE все нечетные числа от 21 до 67
    
*/
let num = 21;
while(num < 67){
  num++;
  if(num%2) console.log(num);
}
