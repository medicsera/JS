// 1 номер Создать функцию, которая вычисляет разность двух переданных чисел. Выполнить задание двумя способами:
//1.1 функция выводит сообщение с результатом
function vichit1 (a,b){
    let res = a-b
    console.log(res)
}
vichit1(5,6)
//1.2в функции выполняется разность, а сообщение с результатом выводится в основной программе.
function vichit2 (a,b){
    let res = a-b
    return res;
}
console.log(vichit2(5,6))

//2. Создать функцию, которая принимает возраст и выводит диалоговое окно с
//сообщением ‘Привет, малыш!’, если возраст менее 18, и ‘Здравствуйте, юноша!’,
// если возраст более или равен 18.

function vozrast(age){
    if(age<18){
        console.log("Привет, малыш!");
    }
    else{
        console.log("Здравствуйте, юноша!");
    }
}
vozrast(19)

//3. Создать функцию, возвращающую наибольшее из трех чисел. Аргументами функции являются сами числа.

function maxim (a,b,c){
    console.log(Math.max(a,b,c))
}
maxim(3,7,4)

//4. Что выведет на экран следующий код? Объясните почему так.
let variable = "Глобальная переменная";
function f() {
    let variable = "Локальная переменная";
    console.log(variable);
}
f();
console.log(variable);
//выводит:
//Локальная переменная
//Глобальная переменная
//ну потому что вызывают сначала функцию f, в которой просто пишет "Локальная переменная"
//а пото просто через консоль.лог пишут переменную variable, которая равна "Глобальная переменная"

//5. Даны действительные числа x, y и z. Создать функцию, которая возвращает значение
//u:
function u(x,y,z){
    return ((Math.max(x,y) + Math.max(x+y,z))/(Math.max(0.5,x+z))**2)
}
console.log(u(1,4,2))

//6. Написать и протестировать функцию, определяющую периметр плоского n-угольника,
// координаты вершин которого передаются в качестве параметра в виде 2n чисел: xi и yi.

function perimetr(...coords){
    const xy = []
    if(coords.length % 2 == 0) {
        for (let i = 0; i < coords.length; i += 2) {
            xy.push([[coords[i]], coords[i + 1]]);
        }
    }
    else{
        console.log("Неправильное количество координат")
    }
    const xyLen = xy.length
    let perim = 0
    for(let i =0;i < xyLen;i++){
        const x1 = xy[i][0]
        const y1 = xy[i][1]
        const x2 = xy[(i+1) % xyLen][0]
        const y2 = xy[(i+1) % xyLen][1]
        perim += Math.sqrt((x2-x1)**2+(y2-y1)**2);
    }
    console.log (perim);
}
const coord = [0,0,0,1,1,1,1,0]
perimetr(...coord)

//7. Написать и протестировать рекурсивную функцию для вычисления N-ного члена
// последовательности, начинающейся с единицы, в которой каждый следующий член
// равен синусу суммы всех предыдущих.

function recurs(n){
    if (n == 1){
        return 1;
    }
    else{
        let sum = 0
        for(let i = 1; i < n; i++) {
            sum += recurs(i)
        }
        return Math.sin(sum)
    }


}
console.log(recurs(3))

console.log("Массивы")

//1. Создать массив arr. Присвоить значение трем элементам созданного массива.
// Вывести значение элемента массива с индексом 2. Вывести количество элементов
// массива. Удалить второй по счету элемент, после чего вывести элементы массива на
// экран, каждый элемент с новой строки

let arr = [5,6,8]
console.log(arr[1])
console.log(arr.length)
arr.splice(1,1)
console.log(arr.join('\r\n'))

//2. Создать два массива: countries – с названием стран, и population – с населением этих
// стран. Вывести название страны и ее население. Вывод элементов массива оформить
// в виде функции. Сначала выполнить задание с помощью цикла for с счетчиком, затем
// — с помощью цикла for in.

let countries = ["Россия","Казахстан","Китай"]
let population = [144, 20, 1411]

console.log(" Первый способ:")
for(let i = 0; i < countries.length; i++){
    console.log(countries[i],  population[i])
}

console.log("\n Второй способ:")

for(let key in countries){
    console.log(countries[key],  population[key])
}

//3. Дополните код:
// let arr = ["January", "February", "March", "April", "May", "June"];
// let len = ...
// console.log(arr.join(" "));
// console.log(len);
// Присвойте значение метода pop() в переменную len. Выведите отдельно
// результирующий массив и отдельно его удаленный элемент (значение переменной
// len).

let arr2 = ["January", "February", "March", "April", "May", "June"];
let len = arr2.pop()
console.log(arr2.join(" "));
console.log(len);

//4. Дополните код:
// let number = [1, 2, 3, 4, 5, 6, 7];
// let t = ...
// console.log(t);
// Присвойте переменной t результат метода slice(), который будет возвращать первых
// 3 значения из массива

let number = [1, 2, 3, 4, 5, 6, 7];
let t = number.slice(0,3)
console.log(t);

//5. Дополните код:
// let number2 = [1, 2, 3, 4, 5, 6, 7];
// let tt = ...
// console.log(a);
// В переменную tt присвоить значение метода splice(), который должен удалить числа
// 2, 3, 4 из массива.

let number2 = [1, 2, 3, 4, 5, 6, 7];
let tt = number2.splice(1,3)
console.log(number2);

//6. Дан массив из чисел: 1, 2, 3, 4, 5. Распечатать массив в обратном порядке (5, 4, 3, 2,
// 1), используя функцию javaScript reverse().

let numb = [1,2,3,4,5]
console.log(numb.reverse())

//7. Дан массив из элементов: ‘c’, 5, 2, ‘b’, 3, 1, 4, ‘a’. Распечатать массив, предварительно
// отсортировав его по возрастанию (1, 2, 3, 4, 5, a, b, c).

let massive = ['c', 5, 2, 'b', 3, 1, 4, 'a']
console.log(massive.sort())

//8. Дан массив из элементов: 1, 2, 3, 4, 5. Распечатать исходный массив поэлементно с
// разделителем «+» (метод javaScript join – 1+2+3+4+5).

let massive2 = [1,2,3,4,5]
console.log(massive2.join("+"))

//9. Даны два массива из неотсортированных целочисленных элементов: 1, 2, 5, 4, 6 и 8,
// 2, 5, 9, 5. Найти медиану двух этих массивов одновременно (медиана — это числовое
// значение, которое делит отсортированный массив чисел на большую и меньшую
// половины. В отсортированном массиве с нечетным числом элементов медиана —
// это число в середине массива, с четным — ищем среднее арифметическое двух
// элементов посередине). Для решения задачи понадобятся стандартные функции.

let array1 = [1,2,4,6,5]
let array2 = [8,2,5,9,5]

let arrplus = array1.concat(array2)
arrplus.sort()
console.log(arrplus)
let length = arrplus.length
//console.log(length)
if(length % 2 !== 0){
   console.log(arrplus[Math.floor(length/2)])
}
else{
    console.log(Math.floor((arrplus[length/2] + arrplus[(length/2) + 1])/2 ))
}

//10. Создать массив, наполнить его случайными значениями, найти максимальное и
// минимальное значение и поменять их местами. Вывести на экран.

let randommassive = [5,9,1,2,6,2,7,11]
let indmin = randommassive.indexOf(Math.min.apply(null,randommassive))
let indmax = randommassive.indexOf(Math.max.apply(null,randommassive));
[randommassive[indmin], randommassive[indmax]] = [randommassive[indmax],randommassive[indmin]]
console.log(randommassive)

//11. Дан одномерный числовой массив. Если он упорядочен по убыванию, то вывести
// его на экран в обратном порядке; в противном случае вывести на экран номер
// первого элемента, нарушающего упорядоченность

