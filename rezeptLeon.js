const input = document.getElementById("input");
const amounts = document.querySelectorAll("span");

let originalValue = input.value;

const normalizedAmounts = [];

for (let i = 0; i < amounts.length; i++) {
    let normalizedAmount = amounts[i].textContent / originalValue;
    normalizedAmounts.push(normalizedAmount);
}

function calculate() {
    for (let i = 0; i < amounts.length; i++) {
        amounts[i].textContent = normalizedAmounts[i] * input.value;
    }
}