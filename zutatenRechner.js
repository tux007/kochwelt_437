// Zutatenliste als Tabelle angeben

const input = document.getElementById("input"); // <input> benötigt id="input" & value="..."
const amounts = document.querySelectorAll("table span"); // Mengenangaben in <span><span/>

let originalValue = input.value;

const normalizedAmounts = [];

function normalizeAmounts() {
    for (let i = 0; i < amounts.length; i++) {
        let normalizedAmount = amounts[i].textContent / originalValue;
        normalizedAmounts.push(normalizedAmount);
    }
}

window.onload = function() {
    normalizeAmounts();
};

function checkInput() {
    const input = document.getElementById('input').value;
    if (input < 1 || input > 20) {
        showMessage();
    } else {
        calculate();
    }
}

function showMessage() {
    const customMessage = document.getElementById('customMessage');
    customMessage.style.display = 'flex';
    setTimeout(() => {
        customMessage.style.display = 'none';
    }, 2000);
}

function closeMessage() {
    document.getElementById('customMessage').style.display = "none";
}

function calculate() {
    for (let i = 0; i < amounts.length; i++) {
        amounts[i].textContent = normalizedAmounts[i] * input.value;
    }
}