//много текста
function one(){
    function ask_password(login,password,success,failure){
        const vowels = (string) =>{
            const matches = string.match(/[aeiou]/gi);
            return matches;
        }
        const consonants = (string) => {
            const matches = string.match(/[bcdfghjklmnpqrstvwxyz]/gi);
            return matches;
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

