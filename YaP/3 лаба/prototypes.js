// 1. В приведённом ниже коде создаются и изменяются два объекта. Какие значения
// показываются в процессе выполнения кода и почему?
function one(){
    let animal = {
        jumps: null
    };
    let rabbit = {
        __proto__: animal,
        jumps: true
    };
    console.log(rabbit.jumps); // ? (1) выводит "true" т.к. rabbit перенимает свойство jumps,
    // но при этом меняет его на своё значение "true"
    delete rabbit.jumps;
    console.log(rabbit.jumps); // ? (2) выводит "null" т.к. удаляется личное значение rabbit в виде
    // "true" и присваивается значение от прототипа animal равное "null"
    delete animal.jumps;
    console.log(rabbit.jumps); // ? (3) выводит "undefined" т.к. вообще не существует такого свойства
}
one()

//2. Объект rabbit наследует от объекта animal. Какой объект получит свойство full при
// вызове rabbit.eat(): animal или rabbit? Продемонстрируйте это при помощи кода.
function two(){
    let animal = {
        eat() {
            this.full = true;
        }
    };
    let rabbit = {
        __proto__: animal
    };
    rabbit.eat();
    console.log(animal, rabbit) // вывод: {eat: ƒ} {full: true}, получается что
    // только rabbit принимает св-во full
    delete rabbit.eat
    animal.eat()
    console.log(animal, rabbit)// а если вызвать у animal, то и animal и rabbit
    // получат св-во full
}
two()

//3. У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); оба наследуют от общего
// объекта hamster. Когда мы кормим одного хомяка, второй тоже наедается. Почему?
// Как это исправить?


function tree(){
    let hamster = {
        eat(food) {
            this.stomach.push(food);
        }
    };
    let speedy = {
        __proto__: hamster,
        stomach: [] //сделали массив с находками у каждого хомяка свой,
        // тем самым не передаются продукты обоим, даже если находит один
    };
    let lazy = {
        __proto__: hamster,
        stomach: []
    };
// Этот хомяк нашёл еду
    speedy.eat("apple");
    console.log(speedy.stomach); // apple
// У этого хомяка тоже есть еда. Почему? Исправьте
    console.log(lazy.stomach); // apple
}
tree()

//4. В Javascript у вас есть возможность менять прототипы как собственных, так и
// встроенных классов (добавлять свойства и методы). Прототип — это объект,
// определяющий структуру. Например, вы можете изменить прототип класса String.
// Запустите и разберите следующий код:

function  four(){
// // Добавление свойства по умолчанию к встроенному объекту
    String.prototype.color = "black";
    String.prototype.size = 14; // добавили св-во size и установили значение равное 14
// // Добавление (изменение) метода к встроенному объекту
    String.prototype.write = stringWrite;
    function stringWrite(){
        console.log("Цвет текста: " + this.color);
        console.log("Текст: " + this.toString())
        console.log("Размер: " + this.size) // добавили size в вывод
    }
// // используем измененный класс
    let s = new String("Это строка");
    s.color = "red";
    s.write();
    let s2 = new String("Вторая строка");
    s2.size = 16 // поменяли размер на другой у второй строки
    s2.write();
// К классу String добавьте свойство size, которое хранит в себе размер шрифта.
// Измените метод write(), чтобы он также выводил информацию о шрифте.
}
four()

//5. В коде ниже мы создаём нового кролика new Rabbit, а потом пытаемся изменить его
// прототип. Сначала у нас есть такой код:
// function Rabbit() {}
// Rabbit.prototype = {
// eats: true
// };
// let rabbit = new Rabbit();
// console.log(rabbit.eats); // true
// Что будет выведено в консоль, если перед console.log добавить строчку:
//  Rabbit.prototype = {};
//  Rabbit.prototype.eats = false;
//  delete rabbit.eats;
//  delete Rabbit.prototype.eats;
// Как вы можете это объяснить?

function five (){
    function Rabbit() {}
    Rabbit.prototype = {
        eats: true
    };
    let rabbit = new Rabbit();
    console.log(rabbit.eats); // true
    //Что будет выведено в консоль, если перед console.log добавить строчку:
    //  Rabbit.prototype = {}; выводит: "true" не меняется так как вывод ссылается на старый прототип и новый ему не мешает
    //  Rabbit.prototype.eats = false; выводит: "false" потому что меняет значение на false
    //  delete rabbit.eats; выводит: "true" удаляется св-во объекта, а не протипа, поэтому ничего не меняется
    //  delete Rabbit.prototype.eats; выводит: "undefined" т.к. удаляется св-во прототипа, поэтому объекту он теперь недоступен
   // Как вы можете это объяснить?
}
five()