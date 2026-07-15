const checkbox = document.querySelector("#agree");
const button = document.querySelector("#button");

checkbox.addEventListener("change", function () {

    button.disabled = !checkbox.checked;

});

/* button.addEventListener("click", function() {
    alert ("Welcome Trainer!")
}) */

button.addEventListener("click", click) 

    function click() {
        button.innerText = "Welcome trainer!"
        button.style.background = "#fde36c"
        button.style.fontWeight = "bold"
    }

/*const textbox = document.querySelector(".inputbox")
    const textinput = textbox.value

    
    if (textinput == "") {
        alert("Ops! You forgot something!")
    } */