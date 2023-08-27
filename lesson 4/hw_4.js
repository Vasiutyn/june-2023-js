// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function sumapr(a, b) {
    return a * b
}
sumapr(2, 5)
// ----------------------------------------------------------------------

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function kolo(r) {
    const p = 3.14
    r = r * r
    return p * r
}
kolo(3)
// ----------------------------------------------------------------------

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function clnd(h, r) {
    const p = 3.14
    return 2 * p * h * r
}
clnd(6, 5)
// ----------------------------------------------------------------------

// - створити функцію яка приймає масив та виводить кожен його елемент
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
function funkname(masv) {
    for (content of masv) {
        console.log(content)
    }
}
funkname(users)
// ----------------------------------------------------------------------

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function funword(a) {
    document.write(`<p>${a}</p>`)
}
funword("asdasdasd")
// ----------------------------------------------------------------------

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function firstLI(a) {
    document.write(`<ul>`);

       for (let i = 0; i < 3;  i++) {
           document.write(`<li>${a}</li>`)
       }
    document.write(`</ul>`);
}
firstLI('asdasdsadascs')
// ----------------------------------------------------------------------

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function two(t, n) {
    document.write(`<ul>`);

    for (let i = 0; i < n; i++) {
        document.write(`<li>${t}</li>`)
    }
    document.write(`</ul>`);
}
two('mierda', 2);
// ----------------------------------------------------------------------

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function element(...arr) {
    console.log(Array.from(arguments));
}
element(1, 2, 'asds', 'ppdpcp', true, false)
// ----------------------------------------------------------------------

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function block(id, name, age) {
    document.write(`<div>ID: - ${id}</div>`);
    document.write(`<div>Name: - ${name}</div>`);
    document.write(`<div>Age: - ${age}</div>`);
}
block(2, 'vira', 23)
// ----------------------------------------------------------------------

// - створити функцію яка повертає найменьше число з масиву
const numbers = [6, 3, 2, 7, 1, 9, 0];
function nameMin(numbers) {
    let min = numbers[0];
    for (let num of numbers) {
        if (min > num) {}
        min = num
    }
    return min
}
let unswer = nameMin(numbers);
console.log(unswer);
// ----------------------------------------------------------------------

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
const arrs = [6, 3, 2, 7, 1, 9, 0];
function f(arrs) {
    let sum = arrs[0]
    for (let num of arrs) {
        if (sum + num) {
            sum = sum + num;
        }
    }
    return sum
}
let unswer1 = f(arrs);
console.log(unswer1);
// ----------------------------------------------------------------------

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

