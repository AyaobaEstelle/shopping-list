
//variable.
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


function inputlength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputlength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputlength() > 0 && event.which === 13) {
        createListElement();
    }
}

// addEventListener.
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
