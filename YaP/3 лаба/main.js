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

