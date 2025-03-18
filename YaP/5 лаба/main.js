//1. (1 балл) Запустите следующий код:

// Что выводится на экран? Почему?

function one(){
    let promise = new Promise(function(resolve, reject) {
        resolve(1); // здесь присваивается значение 1 и сразу считается выполненным
        setTimeout(() => resolve(2), 1000); // следовательно здесь уже не будет меняться, так как считается выполненной, он просто игнорируется
    });
    promise.then(console.log);
}
one()
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
two()