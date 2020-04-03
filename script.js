var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
let c1 = document.querySelector(".c1");
let c2 = document.querySelector(".c2");
let body = document.getElementById("a");

function setcolor() {
    body.style.background =
        "linear-gradient(to right," +
        c1.value +
        "," +
        c2.value +
        ")";
}
c1.addEventListener("input", setcolor);
c2.addEventListener("input", setcolor);

// function inputLength() {
//     return input.value.length;
// }


// function delItem(event) {
//     console.log(event);
//     console.log(event.path[1].innerText);
//     let a = event.path[1];
//     a.remove();

// }

// function createListElement() {
//     var del = document.createElement("button");
//     del.innerHTML = "x";
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode(input.value));
//     ul.appendChild(li);
//     li.appendChild(document.createTextNode(" "));
//     li.appendChild(del);
//     del.addEventListener('click', delItem);
//     li.style.border = "thick solid #0000FF";
//     input.value = "";
//     li.addEventListener('click', liClick);

//     function liClick() {
//         this.classList.toggle("done");
//     }
// }

// function addListAfterClick() {
//     if (inputLength() > 0) {
//         createListElement();
//     }
// }

// function addListAfterKeypress(event) {
//     if (inputLength() > 0 && event.keyCode === 13) {
//         createListElement();
//     }
// }

// button.addEventListener("click", addListAfterClick);
// input.addEventListener("keypress", addListAfterKeypress);
let d = new Date();
document.getElementById('date').innerHTML = d.toLocaleString();

function delet(e) {
    console.log(e);
    let a = e.path[1];
    a.remove();
}

function liClick() {
    this.classList.toggle("done");
}

function add() {
    var del = document.createElement("button");
    del.setAttribute("id", "delt");
    del.innerHTML = 'x';
    var li = document.createElement("li");
    li.className = "listItem";
    li.appendChild(document.createTextNode(input.value));
    li.appendChild(del);
    ul.appendChild(li);
    input.value = "";
    del.addEventListener("click", delet);
    li.addEventListener('click', liClick);
    // const listItems = document.getElementsByClassName("listItem");
    // console.log(listItems.length);

}

function inputLength() {
    return input.value.length;
}

function addListAfterClick() {
    if (inputLength() > 0) {
        add();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        add();
    }
}
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);