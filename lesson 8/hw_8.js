// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone
}
const users = [
    new User(1,'sdsd', 'a', 'sdd', '3442342'),
    new User(2,'sdsdsd', 'asdad', 'sdfdfd', '34142342342'),
    new User(3,'sdsdsd', 'asdad', 'sdssdfsdfdfd', '34142342342'),
    new User(4,'sdsdsd', 'asdad', 'sdfdfd', '34142342342'),
    new User(5,'sdsdsd', 'asdad', 'sdfdfd', '34142342342'),
    new User(6,'sdsdsd', 'asdad', 'sxcvcxdfdfd', '34142342342'),
    new User(7,'sdsdsd', 'asdad', 'sdfdfd', '34142342342'),
    new User(8,'sdsdsd', 'asdad', 'sdfdfd', '34142342342'),
    new User(9,'sdsdsd', 'asdad', 'sdfdfd', '34142342342'),
    new User(10,'sdsdqwsd', 'asdadqw', 'sdfqwedfd', '34142342342')
];
console.log(users);
//---------------------------------------------------------------------------------------------------

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
const filteruser = users.filter((User) => !(User.id % 2))
console.log(filteruser);
//---------------------------------------------------------------------------------------------------

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
const sortuser = users.sort((a, b) => a.id - b.id)
console.log(sortuser);
//---------------------------------------------------------------------------------------------------

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
function Client(id, name, surname , email, phone, order) {
    User.call(this, id, name, surname , email, phone)
    this.order = order
}
const clients = [
    new Client(1,'sdsd', 'a', 'sdd', '3442342', ['qweqwe', 'qwwqdq', 'cgbbgcb']),
    new Client(2,'sdsdsd', 'asdad', 'sdfdfd', '34142342342', ['qweqwe', 'qwwqdq', 'cgbbgcb']),
    new Client(3,'sdsdsd', 'asdad', 'sdssdfsdfdfd', '34142342342', ['qweqwe', 'qwwqdq', 'cgbbgcb']),
    new Client(4,'sdsdsd', 'asdad', 'sdfdfd', '34142342342', ['qweqwe', 'qwwqdq', 'cgbbgcb']),
    new Client(5,'sdsdsd', 'asdad', 'sdfdfd', '34142342342', ['qweqwe', 'qwwqdq', 'cgbbgcb']),
    new Client(6,'sdsdsd', 'asdad', 'sxcvcxdfdfd', '34142342342', ['qweqwe', 'qwwqdq', 'cgbbgcb']),
    new Client(7,'sdsdsd', 'asdad', 'sdfdfd', '34142342342', ['qweqwe', 'qwwqdq', 'cgbbgcb']),
    new Client(8,'sdsdsd', 'asdad', 'sdfdfd', '34142342342', ['qweqwe', 'qwwqdq', 'cgbbgcb']),
    new Client(9,'sdsdsd', 'asdad', 'sdfdfd', '34142342342', ['qweqwe', 'qwwqdq', 'cgbbgcb']),
    new Client(10,'sdsdqwsd', 'asdadqw', 'sdfqwedfd', '34142342342', ['qweqwe', 'qwwqdq', 'cgbbgcb'])
    ];
console.log(clients);
//---------------------------------------------------------------------------------------------------

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, comp, year, maxspeed, engine) {
    this.model = model;
    this.comp = comp;
    this.year = year;
    this.maxspeed = maxspeed;
    this.engine = engine
    this.driver = null

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
    }

    this.info = function () {
        console.log(`----------INFO--------------`)
        for (const key in this) {
            if (typeof this[key] === `function`) {
                continue
            }
            console.log(`${key.toUpperCase()}: `, this[key])
        }
        console.log(`----------INFO--------------`)
    }

    this.increaseMaxSpeed = function (newSpeed) {
        this.maxspeed = this.maxspeed + newSpeed
    }

    this.changeYear = function (newValue) {
        this.year = newValue
    }
    this.addDriver = function (a) {
        this.driver = a;
    }
}
const cars1 = new Car('cr-v', 'honda', 2016, 170, 2.5)

cars1.drive()
cars1.info()
cars1.increaseMaxSpeed(30)
cars1.info()
cars1.changeYear(2022)
cars1.info()

// function Driver(name, year, exp) {
//     this.name = name;
//     this.year =year;
//     this.exp = exp
// }
// const driver = new Driver('vova', 1999, 4)
// cars1.addDriver(driver);
// cars1.info()
//---------------------------------------------------------------------------------------------------

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car2 {
    constructor(model, comp, year, maxspeed, engine)
    {
        this.model = model;
        this.comp = comp;
        this.year = year;
        this.maxspeed = maxspeed;
        this.engine = engine
        this.driver = null
    }
    drive() {
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
    }

    info() {
        console.log(`----------INFO--------------`)
        for (const key in this) {
            if (typeof this[key] === `function`) {
                continue
            }
            console.log(`${key.toUpperCase()}: `, this[key])
        }
        console.log(`----------INFO--------------`)
    }

    increaseMaxSpeed(newSpeed) {
        this.maxspeed = this.maxspeed + newSpeed
    }

    changeYear(newValue) {
        this.year = newValue
    }
    addDriver(a) {
        this.driver = a;
    }
}
const cars2 = new Car2('a6, audi', 2023, 300, 2.5);
cars2.drive()
cars2.info()
cars2.increaseMaxSpeed(30)
cars2.info()
cars2.changeYear(2022)
cars2.info()

function Driver(name, year, exp) {
    this.name = name;
    this.year =year;
    this.exp = exp
}
const driver = new Driver('vira', 2000, 6)
cars2.addDriver(driver);
cars2.info()
//---------------------------------------------------------------------------------------------------

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Popelushka extends Human {
    constructor(name, age, footsize) {
        super(name, age)
        this.footsize =footsize
    }
}
class Prints extends Human {
    constructor(name, age, bootsize) {
        super(name, age);
        this.bootsize =bootsize
    }
}

const popelArr = [
    new Popelushka('kolya', 35, 42),
    new Popelushka('olha', 34, 43),
    new Popelushka('anna', 33, 44),
    new Popelushka('vira', 32, 45),
    new Popelushka('petya', 31, 46),
    new Popelushka('vasya', 45, 47),
    new Popelushka('dima', 35, 36),
    new Popelushka('mex', 45, 47),
    new Popelushka('tola', 23, 38),
    new Popelushka('vova', 67, 39)
];
const prints = new Prints('jamer', 50, 40)