//1. (1 балл) Запустите следующий код:

// Что выводится на экран? Почему?

function one(){
    let promise = new Promise(function(resolve, reject) {
        resolve(1); // здесь присваивается значение 1 и сразу считается выполненным
        setTimeout(() => resolve(2), 1000); // следовательно здесь уже не будет меняться, так как считается выполненной, он просто игнорируется
    });
    promise.then(console.log);
}
//one()
//выводит 1

//2. (2 балла) Проведите промисификацию функций (надо поменять функцию, которая
// принимает колбэк, чтобы она вместо этого возвращала промис) в задание №2 из
// лабораторной №4. Выполните задание при помощи промисов

function two() {
    // Асинхронные функции
    function readConfig(name, promise) {
        return new Promise((resolve) => {
        setTimeout(() => {
            console.log('(1) config from ' + name + ' loaded')
            resolve()
        }, Math.floor(Math.random() * 1000))
        })
    }

    function doQuery(statement, promise) {
        return new Promise((resolve) => {
            setTimeout(() => {
            console.log('(2) SQL query executed: ' + statement)
                resolve()
        }, Math.floor(Math.random() * 1000))
    })
        }

    function httpGet(url, promise) {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('(3) Page retrieved: ' + url)
                resolve()
            }, Math.floor(Math.random() * 1000))
        })
    }

    function readFile(path, promise) {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('(4) Readme file from ' + path + ' loaded')
                resolve()
            }, Math.floor(Math.random() * 1000))
        })
    }


// Вызов функций через callback:
    function promise() {
        console.log('start')
        return readConfig('myConfig')
            .then(() => doQuery('select * from cities'))
            .then(() => httpGet('http://google.com'))
            .then(() => readFile('README.md'))
            .then(() => {
                console.log('It is done!');
                console.log('end');
            })
    }
    promise()
}
//two()


function tree(){
    function f1(x){
        return Promise.resolve(x * x)
    }
    function f2(x){
        return Promise.resolve(x * 2)
    }
    function f3(x){
        return Promise.resolve(-2)
    }
    function f4(x,callback){
        return Promise.resolve(x + 5)
    }
    function f5(x,callback){
        return Promise.resolve(x - 3)
    }
    function f6(x,callback){
        return Promise.resolve(x / 2)
    }


    async function calculate(x, ...functions){
        let res = 0;
        for (let i = 0; i < functions.length; i++){
            const middle_res = await functions[i](x)
            res += middle_res
            console.log("Промежуточный результат: ", middle_res)
        }
        return res
    }


    (async() => {
        // const func2 = calculate(3,f1,f2);
        // console.log(func2)
        // const func4 = calculate(3,f1,f2,f3,f4;
        // console.log(func4)
        const func6 = calculate(3,f1,f2,f3,f4,f5,f6)
        console.log(func6)
    })()
}
//tree()


function four(){

}