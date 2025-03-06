//много текста

function one(){
    function ask_password(login,password,success,failure){
        const vowels = (string) =>{
            const matches = string.match(/[aeiou]/gi);
            return matches;
        }
        const consonants = (string) => {
            const matches = string.match(/[bcdfghjklmnpqrstvwxyz]/gi).toLowerCase();
            return matches;
        }
        let error = ""
        console.log(consonants(login))
        console.log(consonants(password))
        if (vowels(password).length !== 3){
            error = "Wrong number of vowels"
        }
        if (vowels(password).length === 3 && consonants(password).length === 3 ){
            if (consonants(login).toString() === consonants(password).toString()){
                success(login)
            }
            else {
                error = "Everything is wrong"
            }
        }
        else{
            error = "Wrong consonants"
        }

    }
    function onSuccess(login){
        console.log(login)
    }
    function onError(error){
        console.error(error)
    }
    function main(login,password){
        this.login = login;
        this.password = password;
        const result = ask_password(login, password, onSuccess, onError)
        if(result.error){
            console.log(`Привет, ${login}!`)
        }
        else{
            console.log(`Кто-то пытался притвориться пользователем ${login}, но в пароле допустил ошибку: ${onError()}`)
        }
    }
    main("logni","aaalgn")

}
one()