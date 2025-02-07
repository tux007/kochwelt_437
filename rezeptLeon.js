const input = document.getElementById("input");
const amount = document.querySelectorAll("span");

let originalValue = input.value;
let oldInputValue = "";

function checkInput() {
    if (input.value != oldInputValue) {
        calculate();
    }
}

function calculate() {
    amount.forEach(e => {
        let normalizedAmount = "";
        
        if (e.innerHTML != null || e.innerHTML != "") {
            normalizedAmount = e.innerHTML / originalValue;
            e.innerHTML = normalizedAmount * input.value;

            oldInputValue = input.value;
        }
    });
}