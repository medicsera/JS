const child = {
    surname: "Корабл ",
    name: "Иван ",
    fathername: "Иванович ",
    dateBith: 2010,
    class: 7,
    maxclass: 11,
    favoritedicipline: ["Math", "Russian ", "Geography"],
    placeOfResident: {
        country: "Russia ",
        city: "Kemerovo ",
        house: "20a ",
        apartament: 500
    },
    placeOfLiving: {
        country: "Russia ",
        city: "Kemerovo ",
        house: "22 ",
        apartament: " "
    }
}
function yearCheck() {
    var currentYear = new Date().getFullYear();
    currentYear = currentYear-200
    if (child.dateBith>currentYear){
        console.log("Год верный")
    }
    else{
        child.dateBith = "Неверный год"
        console.log("Неверный год")
    }
}

function nextclass(){
    const info = document.getElementById("classinfo");
    if(child.class === child.maxclass){
        classinfo.innerHTML = "Достигнут максимальный класс " + child.class;
    }
    else{
        child.class += 1;
    }
}
function vivod () {
    yearCheck()
    const info = document.getElementById("info");
    info.innerHTML = "";
    info.innerHTML += `Фамилия: ${child.surname}, Имя: ${child.name},Отчество: ${child.fathername},Год рождения:${child.dateBith},Класс: ${child.class},Любимые дисциплины: ${child.favoritedicipline} <br>`
    info.innerHTML += `Прописка: ${Object.values(child.placeOfResident)}<br>`
    info.innerHTML += `Место проживания: ${Object.values(child.placeOfLiving)}<br>`
}


