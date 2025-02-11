const students = [
    ["Мирный","Федот",1,"03.02.02"],
    ["Смирный","Никита",2, "02.03.01"],
    ["Иванов", "Петр",2, "02.03.01"],
    ["Павлов","Павел",3, "01.02.01"],
    ["Седов", "Иван",4, "03.03.01"],
    ["Кузьмина","Елизавета", 3, "05.02.02"]
    ];
function find() {
    const code = document.getElementById("code").value
    const answer = document.getElementById("answer");

    answer.innerHTML = "";

    let exist = false;

    for (const student of students){
        const [lastname, firstname,curse, stuCode] = student;
        if (stuCode === code){
            answer.innerHTML += `${lastname}, ${firstname}, ${curse} <br>`;
            exist = true;
        }
        else{
            console.log(`${lastname},${firstname},${curse},${stuCode}`)
        }
    }
    if (!exist){
        answer.innerHTML = "Нет студента с такой группой."
    }
}

