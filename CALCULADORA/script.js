let buttons = document.querySelector(".buttons");
let btn = document.querySelectorAll("span");
let value = document.getElementById("value");
let toggleBtn = document.querySelector(".toggleBtn");
let body = document.querySelector("body");

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
        if (this.innerHTML === "=") {
            value.innerHTML = eval(value.innerHTML);
        } else {
            if (this.innerHTML === "Clear") {
                value.innerHTML = "";
            } else {
                value.innerHTML += this.innerHTML;
            }
        }
    });
}

toggleBtn.onclick = function () {
    body.classList.toggle("dark");
};

// Event listener to handle keyboard input
document.addEventListener("keydown", function (event) {
    const key = event.key;
    if (!isNaN(key) || "+-*/.".includes(key)) {
        // If a number or operator is pressed, append it to the input
        value.innerHTML += key;
    } else if (key === "Enter" || key === "=") {
        // If Enter or "=" is pressed, evaluate the expression
        value.innerHTML = eval(value.innerHTML);
    } else if (key === "Backspace" || key === "Delete") {
        // If Backspace or Delete is pressed, clear the content
        value.innerHTML = "";
    }
});
