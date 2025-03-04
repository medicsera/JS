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
        let sum = 0
        sum += obj
        return sum
    }
    let obj = [2,3,5]
    console.log(multiplyNumeric(obj))
}