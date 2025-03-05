//1. Выполните следующие действия:
// a. Создайте пустой объект user.
// b. Добавьте свойство name со значением John.
// c. Добавьте свойство surname со значением Smith.
// d. Измените значение свойства name на Pete.
// e. Удалите свойство name из объекта.
function one(){
    let user = {}
    user.name = "Jonh"
    user.surname = "Smith"
    user.name = "Pete"
    delete user.name;
}

//2. Создайте объект myBrowser со свойствами name (значение “Microsoft Internet
// Explorer”) и version (значение «9.0»). Выведите значения свойств на экран при
// помощи цикла for in.
function two(){
    myBrowser = {
        name: "Microsoft InternetExplorer",
        version: 9.0
    }
    for (key in myBrowser){
        console.log(key,myBrowser[key])
    }
}
two()


//3. Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет
// свойств, иначе false.

function tree(){
    function isEmpty(obj){
        for(let key in obj){
            return false
        }
        return  true
    }
    let zeroobj = {}
    console.log(isEmpty(myBrowser))
    console.log(isEmpty(zeroobj))
}
tree()

//4. Можно ли изменить объект, объявленный с помощью const? Как вы думаете?
// Запустите и разберите следующий код:
// const user = {
// name: "John"
// };
// // это будет работать?
// user.name = "Pete";
// // а это?
// user = 123;
function four (){
    const user = {
        name: "John"
    };
// это будет работать?
    user.name = "Pete"; // работает
    console.log(user.name)
// а это?
   //user = 123; // не работает так как неопределяется переменная
}
four()

//5. Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства
// объекта obj на 2.

function five(){
    function multiplyNumeric(obj){
        for (let key in obj){
            if (typeof obj[key] === "number"){
                obj[key] *= 2
            }
        }
    }
    let object = {
        num1: 2,
        num2: 3,
        num3: 5,
        string: "value"

    }
    multiplyNumeric(object)
    console.log(object)
}
five()

//6. Создайте объект calculator (калькулятор) с тремя методами:
//  read(a, b) (читать) принимает два значения и сохраняет их как свойства объекта.
//  sum() (суммировать) возвращает сумму сохранённых значений.
//  mul() (умножить) перемножает сохранённые значения и возвращает результат.

function six (){
    let calculator = {
        read(a,b){
            this.a = a;
            this.b = b;
        },
        sum(){
            return this.a + this.b;
        },
        mul(){
            return this.a * this.b;
        }
    }
    calculator.read(5,4)
    console.log("sum: " + calculator.sum())
    console.log("mul: " + calculator.mul())
}
six()

//7. У нас есть объект ladder (лестница), который позволяет подниматься и спускаться:
// let ladder = {
// step: 0,
// up() {
// this.step++;
// },
// down() {
// this.step--;
// },
// showStep: function() { // показывает текущую ступеньку
// console.log(this.step);
// }
// };
// Теперь, если нам нужно выполнить несколько последовательных вызовов, мы можем
// сделать это так:
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0
// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было
// сделать по цепочке, например, так:
//ladder.up().up().down().showStep().down().showStep(); // выводит 1 затем 0

function seven (){
    let ladder = {
        step: 0,
        up() {
            this.step++;
            return this
        },
        down() {
            this.step--;
            return this
        },
        showStep: function() { // показывает текущую ступеньку
            console.log(this.step);
            return this
        }
    };
    // ladder.up();
    // ladder.up();
    // ladder.down();
    // ladder.showStep(); // 1
    // ladder.down();
    // ladder.showStep(); // 0
    ladder.up().up().down().showStep().down().showStep()
}
seven()

//8. Создайте функцию-конструктор класса Browser со свойствами name и version. При
// помощи конструктора создать объект myBrowser со значениями name = “Microsoft
// Internet Explorer” и version = «9.0». Вывести значения свойств на экран. Добавить к
// функции-конструктору класса Browser метод aboutBrowser, который будет выводить
// на экран информацию о свойствах этого объекта.

function eight() {
    function Browser(name, version) {
        this.name = name;
        this.version = version;
        this.aboutBrowser = function () {
            console.log(this.name, this.version)
        };
    }
    let myBrowser = new Browser("Microsoft Internet Explorer", 9.0)
    myBrowser.aboutBrowser()
}
eight()

//9. Создайте объект Сотрудник, который содержит сведения о сотруднике некоторой
// фирмы, такие как Имя, Отдел, Телефон, Зарплата (использовать функциюконструктор и ключевое слово this) и отображает данные об этом сотруднике
// (создать метод объекта для отображения данных). Создать экземпляр объекта и
// вывести свойства на экран.

function nine(){
    function emp(name,depart,phone,salary){
        this.name = name;
        this.depart = depart;
        this.phone = phone;
        this.salary = salary;
        this.aboutEmp = function (){
            console.log(this.name, this.depart, this.phone, this.salary)
        }
    }
    let employee = new emp("Pavel","Sale","78123",50000)
    employee.aboutEmp()
}
nine()

//10. Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя
// методами:
//  read(a, b) принимает два значения и сохраняет их в свойствах объекта.
//  sum() возвращает сумму этих свойств.
//  mul() возвращает произведение этих свойств

function ten(){
    function Calculator(){
        this.read = function (a,b){
            this.a = a;
            this.b = b;
        }
        this.sum = function (){
            return this.a + this.b;
        }
        this.mul = function (){
            return this.a * this.b;
        }
    }
    let calcult = new Calculator()
    calcult.read(4,5)
    console.log(calcult.sum())
    console.log( calcult.mul())
}
ten()

//11. Создайте функцию-конструктор Accumulator(startingValue). Объект, который она
// создаёт, должен уметь следующее:
//  Хранить «текущее значение» в свойстве value. Начальное значение
// устанавливается в аргументе конструктора startingValue.
//  Метод read(a) должен принимать число и прибавлять его к value.
// Другими словами, свойство value представляет собой сумму всех введённых
// пользователем значений, с учётом начального значения startingValue.
// Пример работы с объектом:

// let accumulator = new Accumulator(1); // начальное значение 1
// accumulator.read(10); // прибавляет 10 к текущему значению
// accumulator.read(5); // прибавляет 5 к текущему значению
// console.log(accumulator.value); // выведет 16

function eleven (){
    function Accumulator(startingValue){
        this.value = startingValue;
        this.read = function (a){
            this.value += a;
        }
    }
    let accumulator = new Accumulator(1); // начальное значение 1
    accumulator.read(10); // прибавляет 10 к текущему значению
    accumulator.read(5); // прибавляет 5 к текущему значению
    console.log(accumulator.value); // выведет 16
}
eleven()

