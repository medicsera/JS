//1. Создайте класс Clock. Он должен хранить время (часы, минуты, секунды) и уметь
// выводить его в консоль

function one(){
    class Clock{
        constructor() {
            this.hours = 10;
            this.minutes = 47;
            this.seconds = 14;
        }
        get time(){
            console.log("Часов: " + this.hours)
            console.log("Минут: " + this.minutes)
            console.log("Секунд: " + this.seconds)
        }

    }
    let clock = new Clock();
    clock.time
}
one()

//2. В коде ниже класс Rabbit наследует Animal. К сожалению, объект класса Rabbit не
// создаётся. Что не так? Исправьте ошибку.
function two(){
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Rabbit extends Animal {
        constructor(name) {
            super(); // надо добавить super() перед использованием метода this
            this.name = name;
            this.created = Date.now();
        }
    }
    let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
    console.log(rabbit.name);
}
two()

//3. У нас есть класс Clock. Сейчас он выводит время каждую секунду:

// Создайте новый класс ExtendedClock, который будет наследоваться от Clock и
// добавьте параметр precision – количество миллисекунд между «тиками». Установите
// значение в 1000 (1 секунда) по умолчанию.
// Изменять код класса Clock запрещено

function tree(){
    class Clock {
        constructor(template) {
            this.template = template;
        }
        render() {
            let date = new Date();
            let hours = date.getHours();
            if (hours < 10) hours = '0' + hours;

            let mins = date.getMinutes();
            if (mins < 10) mins = '0' + mins;

            let secs = date.getSeconds();
            if (secs < 10) secs = '0' + secs;

            let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);
            console.log(output);
        }
        stop() {
            clearInterval(this.timer);
        }
        start() {
            this.render();
            this.timer = setInterval(() => this.render(), 1000);
        }
    }
    //let clock = new Clock("h m s");
    //clock.start();

    class ExtendedClock extends Clock{
        constructor(template, precision) {
            super(template)
            this.precision = precision
        }
        start(){
            this.render()
            this.timer = setInterval(() => this.render(), this.precision);
        }
    }
    let clock = new ExtendedClock("h:m:s", 1000);
    clock.start()
}
//tree()

//4. Вы работаете оператором на складе. Время от времени вам привозят новые коробки.
// Каждая коробка имеет свою грузоподъемность wi и объем vi. Получая новую
// коробку, вы ставите на ней серийный номер, используя все целые неотрицательные
// числа последовательно, начиная с нуля.
// Иногда вас просят выдать коробку минимальной грузоподъемности, чтобы она
// выдержала предмет весом w — или коробку минимальной вместимости, в которую
// можно насыпать песок объемом v. Вам нужно быстро определять серийный номер
// коробки, которая будет выдана. После выдачи коробки обратно на склад не
// возвращаются. Если подходящих коробок несколько, нужно выбрать ту, которая
// пролежала на складе меньше.
// Нужно реализовать класс Stock, у которого, среди прочих, будет три метода:
//  add(int w, int v); — добавить коробку на склад;
//  getByW(int min_w); — вернуть номер коробки грузоподъемности, хотя бы
// minw;
//  getByV(int min_v); — вернуть номер коробки объема, хотя бы minv.
// Если подходящей коробки нет, соответствующая функция должна вернуть −1.
// Продемонстрируйте и протестируйте работу всех методов класса.

function four(){
    class Stock{
        constructor() {
        }
        stocks = [[]]
        add(w,v) {

        }
    }
}
four()