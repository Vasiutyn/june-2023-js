// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//  створити пустий масив, наповнити його 10 об'єктами new User(....)

function user(id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
};
const users = [
    new user(1,'sdsd', 'a', 'sdd', '3442342'),
    new user(2,'sdsdsd', 'asdad', 'sdfdfd', '34142342342'),
    new user(3,'sdsdsd', 'asdad', 'sdssdfsdfdfd', '34142342342'),
    new user(4,'sdsdsd', 'asdad', 'sdfdfd', '34142342342'),
    new user(5,'sdsdsd', 'asdad', 'sdfdfd', '34142342342'),
    new user(6,'sdsdsd', 'asdad', 'sxcvcxdfdfd', '34142342342'),
    new user(7,'sdsdsd', 'asdad', 'sdfdfd', '34142342342'),
    new user(8,'sdsdsd', 'asdad', 'sdfdfd', '34142342342'),
    new user(9,'sdsdsd', 'asdad', 'sdfdfd', '34142342342'),
    new user(10,'sdsdqwsd', 'asdadqw', 'sdfqwedfd', '34142342342')
]
console.log(users);
//-----------------------------------------------------------------------------------------------------

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
const filteruser = users.filter((user) => !(user.id % 2));
console.log(filteruser)
//-----------------------------------------------------------------------------------------------------

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
const sortusr = users.sort((a, b) => a.id - b.id )
console.log(sortusr);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
function client(id, name, surname , email, phone, order) {
    user.call(this, id, name, surname , email, phone)
    this.order = order;
}
const clients = [
    new client(1,'sdsd', 'a', 'sdd', '3442342', ['qweqwe', 'qwwqdq', 'cgbbgcb']),
    new client(2,'sdsdsd', 'asdad', 'sdfdfd', '34142342342', ['qweqwe', 'qwwqdq', 'cgbbgcb']),
    new client(3,'sdsdsd', 'asdad', 'sdssdfsdfdfd', '34142342342', ['qweqwe', 'qwwqdq', 'cgbbgcb']),
    new client(4,'sdsdsd', 'asdad', 'sdfdfd', '34142342342', ['qweqwe', 'qwwqdq', 'cgbbgcb']),
    new client(5,'sdsdsd', 'asdad', 'sdfdfd', '34142342342', ['qweqwe', 'qwwqdq', 'cgbbgcb']),
    new client(6,'sdsdsd', 'asdad', 'sxcvcxdfdfd', '34142342342', ['qweqwe', 'qwwqdq', 'cgbbgcb']),
    new client(7,'sdsdsd', 'asdad', 'sdfdfd', '34142342342', ['qweqwe', 'qwwqdq', 'cgbbgcb']),
    new client(8,'sdsdsd', 'asdad', 'sdfdfd', '34142342342', ['qweqwe', 'qwwqdq', 'cgbbgcb']),
    new client(9,'sdsdsd', 'asdad', 'sdfdfd', '34142342342', ['qweqwe', 'qwwqdq', 'cgbbgcb']),
    new client(10,'sdsdqwsd', 'asdadqw', 'sdfqwedfd', '34142342342', ['qweqwe', 'qwwqdq', 'cgbbgcb'])
];
console.log(clients);
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку