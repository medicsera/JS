function factorial(number){
    let res = 1;
    if (number >= 0){
       for (let i = 1; i<= number; i++){
           res *= i;
        }
    }
    else{
        return "Невозможно вычислить интегралл";
    }
    return res;
}

function sredneeArifmetic(number){
    let res = 0;
    for (let i = 1; i<=number; i++){
        res += i;
    }
    return res/number;
}

function voidNumber(){
    const number = parseFloat( document.getElementById("NumberInput").value);
    if (!isNaN(number)) {
        if (number % 2 == 0) {
            let factor = factorial(number);
            document.getElementById('answer').textContent = `Факториал =  ${factor}`;
        }
        else{
            let srednee = sredneeArifmetic(number);
            document.getElementById('answer').textContent = `Среднее арифметическое = ${srednee}`;
        }
    }
    else {
        document.getElementById('answer').textContent = 'Введено некорректное число!'
    }

}