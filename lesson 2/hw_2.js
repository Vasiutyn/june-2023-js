//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let  first = [
    "asdlasd1",
    "asdlasd2",
    "asdlasd3",
    "asdlasd4",
    "asdlasd5",
    "asdlasd6",
    "asdlasd7",
    "asdlasd8",
    "asdlasd9",
    "asdlasd10"
]
console.log(first);

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre
let book = {
    title: 'asf',
    pageCount: 'fasf',
    genre: 'dsfsd'
};
let book2 = {
    title: 'asf',
    pageCount: 'fasf',
    genre: 'dsfsd'
};
let book3 = {
    title: 'asf',
    pageCount: 'fasf',
    genre: 'dsfsd'
};
console.log(book, book2, book3)

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book4 = {
    title: 'asdsad',
    pageCount: 'asfaxxas',
    genre: 'bcvbc',
    authors: ['name', 'age']
}
;let book5 = {
    title: 'asdsad',
    pageCount: 'asfaxxas',
    genre: 'bcvbc',
    authors: ['name', 'age']
}
;let book6 = {
    title: 'asdsad',
    pageCount: 'asfaxxas',
    genre: 'bcvbc',
    authors: ['name', 'age']
};
console.log(book4,book5,book6)

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let ten = [
    {name:'asd',username:'dsvds',password:'vffbfasd'},
    {name:'asd',username:'dsvds',password:'vffbf'},
    {name:'asd',username:'dsvds',password:'vffqwqwbf'},
    {name:'asd',username:'dsvds',password:'vfsdfdsf'},
    {name:'asd',username:'dsvds',password:'vffbf'},
    {name:'asd',username:'dsvds',password:'vsdccsfbf'},
    {name:'asd',username:'dsvds',password:'vffbf'},
    {name:'asd',username:'dsvds',password:'vffbftryty'},
    {name:'asd',username:'dsvds',password:'vffgfngnbf'},
    {name:'asd',username:'dsvds',password:'vffbf'}
]
console.log(ten[0].password);
console.log(ten[2].password);
console.log(ten[3].password);
console.log(ten[4].password);
console.log(ten[5].password);
console.log(ten[6].password);
console.log(ten[7].password);
console.log(ten[8].password);
console.log(ten[9].password);


// Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
let x = 8
let q = 1 && 0 && -3
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
if (x != q) {
    console.log(true);
} else {
    console.log(false)
}


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 32
if (0>=time || time<=14) {
    console.log('першу');
} else if (15>=time || time<=29) {
    console.log('другу');
} else if (30>=time || time<=44) {
    console.log('третю');
} else if (45>=time || time<=60) {
    console.log('четверту');
}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 14
if (1>=day || day<=10) {
    console.log('першу');
} else if (11>=day || day<=20) {
    console.log('другу');
} else if (21>=day || day<=31) {
    console.log('третю');
}


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let days = prompt('порядковий номер дня тижня?')
switch (days) {
    case '1':
        console.log('Monday');
        break;
    case '2':
        console.log('Tuesday');
        break;
    case '3':
        console.log('Wednesday');
        break;
    case '4':
        console.log('Thursday');
        break;
    case '5':
        console.log('Friday');
        break;
    case '6':
        console.log('Saturday');
        break;
    case '7':
        console.log('Sunday');
        break;

    default:
        console.log('??????')
}



// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
let a = prompt('number1');
let b = prompt('namber2');
if (a > b) {
    console.log(a);
} else if (b > a) {
    console.log(b);
} else if (a = b)  {
    console.log('рівні числа');
}



// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let r = prompt();
if (r = undefined || r = null || r = "" || r = 0 || r = NaN) {
    console.log("default");
}


// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5 ) {
    console.log('Супер');
} else if (coursesAndDurationArray[1].monthDuration > 5 ) {
    console.log('Супер');
} else if (coursesAndDurationArray[2].monthDuration > 5 ) {
    console.log('Супер');
} else if (coursesAndDurationArray[3].monthDuration > 5 ) {
    console.log('Супер');
} else if (coursesAndDurationArray[4].monthDuration > 5 ) {
    console.log('Супер');
} else if (coursesAndDurationArray[5].monthDuration > 5 ) {
    console.log('Супер');
}
