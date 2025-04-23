function avg_salary(){
    const january = parseFloat(document.getElementById("january_input").value)
    const february = parseFloat(document.getElementById("february_input").value)
    const march = parseFloat(document.getElementById("march_input").value)
    const april = parseFloat(document.getElementById("april_input").value)
    const may = parseFloat(document.getElementById("may_input").value)
    const june = parseFloat(document.getElementById("june_input").value)

    const average = (january+february+march+april+may+june)/6

    document.getElementById("avg_sal").value = average
}
function reset(){
    document.getElementById("january_input").value = ""
    document.getElementById("february_input").value = ""
    document.getElementById("march_input").value = ""
    document.getElementById("april_input").value = ""
    document.getElementById("may_input").value = ""
    document.getElementById("june_input").value = ""
    document.getElementById("avg_sal").value = ""


}