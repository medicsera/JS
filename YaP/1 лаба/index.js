console.log("1 номер")

let numb = 5
let str = "string"
let und
let flag = false
let array = ["a",2,3,4]
let people = {name: "Churka", age: 1000}
console.log(typeof numb)
console.log(typeof str)
console.log(typeof und)
console.log(typeof flag)
console.log(typeof array)
console.log(typeof people)

console.log("2 номер")

let bol = 10;
let men = 9;
console.log(bol === men)
console.log(bol<men);
console.log(bol<=men);
console.log(bol>men);

console.log("3 номер")

let a = false
let b = null
let c
console.log(a,b,c)

console.log("4 номер")

console.log("1"+2+3)
console.log(1+2+"3")
console.log("1"-1)
console.log("1"+-2)
console.log("1"+"1"-"1")
console.log("foo"+-"bar")
console.log(0=="0")
console.log(0.5+0.1==0.6)
console.log(0.1+0.2==0.3)
console.log(true+true+true==3)
console.log(true==1)
console.log(true===1)
console.log(1<2<3)
console.log(3>2>1)
console.log(9007199254740991 + 1 == 9007199254740991 + 2)
console.log(Math.sqrt(-1) == Math.sqrt(-1))

console.log("5 номер")

let str1 = "Кто "
let str2 = "ты "
let str3 = "такой?"
let concat = str1 + str2 + str3
console.log(concat)

console.log("6 номер")

let srt = 20
let d = 5
console.log(srt + d)
console.log(srt - d)
console.log(srt * "2")
console.log(srt / 2)

console.log("7 номер")

let e = 12
let f = 7.15
console.log(Math.round(e%f))

console.log("8 номер")

let x = 5 ;
let y = (x^2-7*x+10)/(x^2-8*x+12)
console.log(y)

console.log("9 номер")

let CorrectAddress  = "fsafaisdoa@.gmail.com"
let UncorrectAddress = "i9435gher7f7erh"

if (CorrectAddress.includes("@")){
    console.log("Адрес "  + CorrectAddress + " верный")
}
else {
    console.log("Адрес " + CorrectAddress + "не верный")
}
if (UncorrectAddress.includes("@")){
    console.log("Адрес "+ UncorrectAddress +"верный")
}
else {
    console.log("Адрес "+ UncorrectAddress +" не верный")
}

console.log("Управление потоками:")
console.log("1 номер")

let age = 18;
if(age>0 && age<18){
    console.log("Для детей")
}
else if (age>17 && age < 31){
    console.log("Для молодежи")
}
else {
    console.log("Для всех возрастов")
}

console.log("2 номер")

let aa = 5
let bb = 10
let max = 0
if (aa>bb){
    max = aa
    console.log(max)
}
else {
    max = bb
    console.log(max)
}

console.log("3 номер")


let count = 10

// вариант который мне нравится больше
if(count === 1){
    console.log("На ветке сидит 1 ворона")
}
else if(count === 2 || count === 3 || count === 4){
    console.log("На ветке сидит "+ count + " вороны")
}
else if(count === 5 || count === 6 || count === 7 || count ===8 || count === 9 || count === 10){
    console.log("На ветке сидит "+ count + " ворон")
}
else{
    console.log("Неправильное количество ворон, их может быть от 1 до 10, иначе палка сломается")
}
// вариант который просят:
// switch (count){
//     case 1:
//         console.log("На ветке сидит 1 ворона")
//         break
//     case 2:
//     case 3:
//     case 4:
//         console.log("На ветке сидит "+ count + " вороны")
//         break
//     case 5:
//     case 6:
//     case 7:
//     case 8:
//     case 9:
//     case 10:
//         console.log("На ветке сидит "+ count + " ворон")
//         break
// }

console.log("4 номер")

console.log("While:")
let i = 0
while( i < 50){
    if (i % 2 != 0){
        console.log(i)
    }
    i++
}
console.log("For:")
for(i = 0; i < 50; i++){
    if (i % 2 != 0){
        console.log(i)
    }
}

console.log("5 номер")

let sum = 0
for(i = 1; i<=15;i++){
    sum+=i
}
sum-= 5+7
console.log(sum)

console.log("6 номер")

let ab = 3
let ba = 3
let res = ab
let coun = 1
while(coun < ba){
    res*=ab
    coun++
}
console.log(res)