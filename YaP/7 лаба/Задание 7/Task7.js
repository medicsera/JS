function change(){
    const line = document.querySelector(".horizontal-line")
    const line_container = document.querySelector(".line-container")
    const size = document.getElementById("size_input").value
    const width = document.getElementById("width_input").value
    const color =  document.getElementById('color_input').value
    const alignRadios = document.querySelectorAll('input[name="align"]');
    line.style.height = `${size}px`
    line.style.width = `${width}px`
    line.style.backgroundColor = color
    let orient = ''
    let alignment = 'center';
    alignRadios.forEach(radio => {
        if (radio.checked) {
            alignment = radio.value;
        }
    });
    line_container.style.justifyContent = alignment;
}
function reset() {
    document.getElementById("size_input").value = "";
    document.getElementById("width_input").value = "";
    document.getElementById('color_input').value = "teal";
    document.getElementById("center_radio").checked = true;

    const lineContainer = document.querySelector(".line-container");
    const line = document.querySelector(".horizontal-line");

    line.style.height = "10px";
    line.style.width = "100%";
    line.style.backgroundColor = "black";
    lineContainer.style.justifyContent = "center";
}