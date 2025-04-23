function remove_div(){
    document.getElementById("text").style.display = 'none';
}

function return_div(){
    document.getElementById("text").style.display = 'block'
}

function hide_button(){
    document.getElementById("selfhiddenbutton").style.display = 'none'
    const text = document.createElement("h2")
    text.textContent = "Ахаха, теперь её не вернуть)))"
    document.getElementById("number_two").appendChild(text)
}

function event(){
    alert("Был щелчок!")
}

function activate_alert(){
    document.addEventListener('click',event)
}

function remove_alert(){
    document.removeEventListener('click',event)
}


