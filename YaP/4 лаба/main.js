//много текста
function one(){
    function ask_password(login,password,success,failure){
        const vowels = (string) =>{
            return string.match(/[aeiou]/gi);
        }
        const consonants = (string) => {
            return string.match(/[bcdfghjklmnpqrstvwxyz]/gi);
        }
        if (vowels(password).length === 3 && consonants(password).length === 3 && consonants(login).toString() === consonants(password).toString()) {
            success(login);
        }
        else {
            let error = ""
            if((vowels(password).length !== 3) && (consonants(login).toString() !== consonants(password).toString())){
                error = "Everything is wrong"
            }
            else if (vowels(password).length !== 3){
                error = "Wrong number of vowels"
            }
            else if (consonants(login).toString() !== consonants(password).toString()) {
                error = "Wrong consonants"
            }
            failure(login,error)
        }
    }
    function main(login,password){
        ask_password(
            login,
            password,
            function (login){
                console.log(`Привет, ${login}!`);
            },
            function (login, error) {
                console.log(`Кто-то пытался притвориться пользователем ${login}, но в пароле допустил ошибку: ${error.toUpperCase()}`)
            }
        )
    }
    main("logni","aaalgn")
    main("login","luagon")
    main("login","aalgn")
    main("login","aaagln")
    main("login","fsfaa")
}
one()

//Запустите программу несколько раз и убедитесь, что функции выполняются каждый раз
// в разном порядке.
// Перепишите вызов функций между 'start' и 'end' так, чтобы функции выполнялись
// в строгой последовательности: readConfig -> doQuery -> httpGet -> readFile.
// Сделайте это, используя:
// a. Коллбэки (callback)
// b. Функции-уведомители (notification)
// Первоначальные асинхронные функции изменять нельзя.

//readConfig -> doQuery -> httpGet -> readFile.

function two(){
    // Асинхронные функции
    function readConfig (name, callback) {
        setTimeout(() => {
            console.log('(1) config from ' + name + ' loaded')
            callback()
        }, Math.floor(Math.random() * 1000))
    }
    function doQuery (statement, callback) {
        setTimeout(() => {
            console.log('(2) SQL query executed: ' + statement)
            callback()
        }, Math.floor(Math.random() * 1000))
    }
    function httpGet (url, callback) {
        setTimeout(() => {
            console.log('(3) Page retrieved: ' + url)
            callback()
        }, Math.floor(Math.random() * 1000))
    }
    function readFile (path, callback) {
        setTimeout(() => {
            console.log('(4) Readme file from ' + path + ' loaded')
            callback()
        }, Math.floor(Math.random() * 1000))
    }
    function callback () {
        console.log('It is done!')
    }
// Вызов функций через callback:
    function usecallback(){
        console.log('start')
        readConfig('myConfig', () => {
            doQuery('select * from cities', () => {
                httpGet('http://google.com', () => {
                    readFile('README.md', ()=> {
                        callback()
                        console.log('end')
                    });
                });
            });
        });
    }
    //usecallback()

    function notification(f, ...args){
        return new Promise((resolve)=>{
            f(...args, resolve);
        })
    }

    //Вызов через уведомления
    function usenotifications(){
        console.log('start')
        notification(readConfig,'myConfig')
            .then(()=> notification(doQuery,'select * from cities'))
            .then(()=> notification(httpGet,'http://google.com'))
            .then(() => notification(readFile,'README.md'))
            .then(callback)
            .then(()=> console.log('end'))
    }
    usenotifications()
}
//two()

//3. Дана функция вида F(x) = f1(x) + f2(x) + … + fn(x).
// Реализуйте программу, которая вычисляет значение функции F(x) и выводит его на
// экран, при этом все функции fi(x) – асинхронные.
// Организуйте код, в котором функции fi(x) вычисляются последовательно от 1 до n
// при помощи функций-уведомителей (notification), при этом значение
// промежуточного результата доступно на каждом вызове и передается дальше для
// определения ответа.
// Например, f1(x) = x
// 2
// , f2(x) = 2x, f3(x) = -2. Тогда F(x) = x
// 2 + 2x - 2.
// Для x = 3:
// f1 дает значение 9, промежуточный результат 9.
// f2 дает значение 6, промежуточный результат 15.
// f3 дает значение -2, промежуточный результат 13.
// Таким образом, ответ для F(x): 13.
// Приведите примеры работы программы для:
// a. n = 2
// b. n = 4
// c. n = 6

function tree(){
    function f1(x,callback){
        setTimeout(() => {
            const result = Math.pow(x,2);
            callback(result)
        })
        Math.floor(Math.random() * 1000)
    }
    function f2(x,callback){
        setTimeout(() => {
            const result = x * 3;
            callback(result)
        })
        Math.floor(Math.random() * 1000)
    }
    function f3(x,callback){
        setTimeout(() => {
            const result = -2
            callback(result)
        })
        Math.floor(Math.random() * 1000)
    }
    function f4(x,callback){
        setTimeout(() => {
            const result = x + 7;
            callback(result)
        })
        Math.floor(Math.random() * 1000)
    }
    function f5(x,callback){
        setTimeout(() => {
            const result = x * 4;
            callback(result)
        })
        Math.floor(Math.random() * 1000)
    }
    function f6(x,callback){
        setTimeout(() => {
            const result = x / 3;
            callback(result)
        })
        Math.floor(Math.random() * 1000)
    }

    function notify(func, x, middleValue, callback){
        func(x, (result) => {
            const newMiddleValue = middleValue + result;
            console.log("Промежуточный результат: ", newMiddleValue);
            callback(newMiddleValue);
        });
    }

    function calculate(x, functions, callback){
        let middleResult = 0;
        function nextF(index){
            if (index < functions.length){
                notify(functions[index],x,middleResult,(newresult) => {
                    middleResult = newresult;
                    nextF(index + 1);
                })
            }
            else{
                callback(middleResult);
            }
        }
        nextF(0);
    }
    // const func2 = [f1,f2];
    // calculate(3,func2, (result) => {
    //     console.log("Для n = 2: ", result);
    // })
    // const func4 = [f1,f2,f3,f4];
    // calculate(5,func4, (result) => {
    //     console.log("Для n = 4: ", result);
    // })
    const func6 = [f1,f2,f3,f4,f5,f6];
    calculate(3,func6, (result) => {
        console.log("Для n = 6: ", result);
    })

}
tree()