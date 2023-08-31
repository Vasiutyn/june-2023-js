// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
const sumapr = (a, b) => a * b;
console.log(sumapr(2, 5))
console.log(sumapr(2, 7))
// ----------------------------------------------------------------------

// - створити функцію яка обчислює та повертає площу кола з радіусом r
const kolo = (r) => Math.PI * r * r
    console.log(kolo(5))
    console.log(kolo(7))
// ----------------------------------------------------------------------

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const clnd = (h,r) => 2 * Math.PI * h * r
console.log(clnd(5, 6));
console.log(clnd(8, 6));

// - створити функцію яка приймає масив та виводить кожен його елемент
const funkname = (masvs) => {
    for (masv of masvs) {
        console.log(`item:`, masv)
    }
}
funkname([5,'ona', true, 2])
// ----------------------------------------------------------------------

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
const funword = (text) => {
    document.write(`<p>${text}</p>`);
}
funword('ona two 3');
// ----------------------------------------------------------------------

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const funli = (text) => {
    document.write(`<ul>`)
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
funli('red black')
// ----------------------------------------------------------------------

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const funul = (text, number) => {
    document.write(`<ul>`)
    for (let i = 0; i < number; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
funul('wite ten',5)
// ----------------------------------------------------------------------

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const funul3 = (arr) => {
    document.write(`<ul>`)
    for (item of arr){
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`)
}
funul3(['ona', 5, false, 'yellow', 0, true])
// ----------------------------------------------------------------------

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
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
const funknam = (masv) => {
    for (content of masv) {
        document.write(`
        <div>
        <p>name: ${content.name}</p>
        <p>age: ${content.age}</p>
        <p>status: ${content.status}</p>
        </div>
        `)
    }
}
funknam(users)
// ----------------------------------------------------------------------

// - створити функцію яка повертає найменьше число з масиву
const min = (arr) => {
    let minnumber = arr[0]
    for (let number of arr) {
        if (minnumber > number) {
            minnumber = number
        }
    }
    return minnumber
}
let unswer = min([6, 3, 2, 7, 1, 9, 0])
console.log(unswer);
// ----------------------------------------------------------------------

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
const funksum = (arr) => {
    let sum = arr[0]
    for (num of arr) {
        if (sum + num) {
            sum = sum + num
        }
    }
    return sum
}
let unswer2 = funksum([6, 3, 2, 7, 1, 9, 0]);
console.log(unswer2);
// ----------------------------------------------------------------------

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
const swap = (arr,index1,index2) => {
    let a = arr[index1];
    let b = arr[index2];
    arr[index1] = b
    arr[index2] = a
    console.log(arr)
}
swap([11,22,33,44],0,1)

// ----------------------------------------------------------------------

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
const exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    for (let item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            resualt = sumUAH / item.value
        }
    }
    return resualt
}
let unsw = exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD')
console.log(unsw);

