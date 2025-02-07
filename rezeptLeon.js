// Zutatenliste als Tabelle angeben

const input = document.getElementById("input"); // <input> benötigt id="input" & value="..."
const amounts = document.querySelectorAll("span"); // Mengenangaben in <span><span/>

let originalValue = input.value;

const normalizedAmounts = [];

for (let i = 0; i < amounts.length; i++) {
    let normalizedAmount = amounts[i].textContent / originalValue;
    normalizedAmounts.push(normalizedAmount);
}

function checkInput() {
    if (input.value >= 1 && input.value <= 20) {
        calculate();
    } else {
        showMessage();
    }
}

function showMessage() {
    document.getElementById("customMessage").style.display = "flex";
}

function closeMessage() {
    document.getElementById("customMessage").style.display = "none";
}

function calculate() {
    for (let i = 0; i < amounts.length; i++) {
        amounts[i].textContent = normalizedAmounts[i] * input.value;
    }
}