// - Знайти та вивести довижину настипних стрінгових значень
let hl = 'hello world'
let ll = 'lorem ipsum'
let jl = 'javascript is cool'
console.log(hl.length);
console.log(ll.length);
console.log(jl.length);
//---------------------------------------------------------------------

// - Перевести до великого регістру наступні стрінгові значення
let hb = 'hello world'
let lb = 'lorem ipsum'
let jb = 'javascript is cool'
console.log(hb.toUpperCase());
console.log(lb.toUpperCase());
console.log(jb.toUpperCase());
//---------------------------------------------------------------------

// - Перевести до нижнього регістру настипні стрінгові значення
let hs = 'HELLO WORLD'
let ls = 'LOREM IPSUM'
let js = 'JAVASCRIPT IS COOL'
console.log(hs.toLowerCase());
console.log(ls.toLowerCase());
console.log(js.toLowerCase());
//---------------------------------------------------------------------

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   '
console.log(str.substring(1, 13));

//---------------------------------------------------------------------

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
    // let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str1 = 'Ревуть воли як ясла повні';
const stringToarray = (arr) => {
    let split = arr.split(' ');
    console.log(split)
}
stringToarray(str1)
//---------------------------------------------------------------------

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let number = [10,8,-7,55,987,-1011,0,1050,0]
let strn = number.map((num) => {
    return num.toString()
})
console.log(strn)
//---------------------------------------------------------------------


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11,21,3];
sortNums = (direction) => {
    if (direction === 'ascending') {
        console.log(nums.sort(function (a, b) {
            return a - b
        }))
    } else if (direction === 'descending') {
        console.log(nums.sort(function (a, b) {
            return b - a
        }))
    }
}
sortNums('descending')
sortNums('ascending')

//---------------------------------------------------------------------

// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let sortmin = coursesAndDurationArray.sort((u1,u2) => {
    return u1.monthDuration - u2.monthDuration
})
console.log(sortmin)
//--
let sortmor = coursesAndDurationArray.filter((u) =>  {
    return u.monthDuration > 5
})
console.log(sortmor)
//--
function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

let push = coursesAndDurationArray.map((value => {
    value.id = uuidv4()
    return value
}))
console.log(coursesAndDurationArray)
// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker