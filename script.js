const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const delButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const equalsButton = document.querySelector('[data-equals]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

let previousOperand = '';
let currentOperand = '';
let operation = undefined;

function clear() {
    previousOperand = '';
    currentOperand = '';
    operation = undefined;
}

function appendNumber(number) {
    if(number === '.' && currentOperand.includes('.')) return;
    currentOperand += number;
}

function chooseOperation(sign) {
    operation = sign;
    previousOperand = currentOperand;
    currentOperand = '';
}

function calculate() {
    let cmp;
    let prev = parseFloat(previousOperand);
    let cur = parseFloat(currentOperand);

    switch(operation) {
        case '+':
            cmp = prev + cur;
            break;

        case '-':
            cmp = prev - cur;
            break;

        case '*':
            cmp = prev * cur;
            break;

        case '÷':
            cmp = prev / cur;
            break;
    }

    currentOperand = cmp;
    previousOperand = '';
    operation = '';
}

function del() {
    currentOperand = currentOperand.slice(0, -1);
}

function updateDisplay() {
    currentOperandTextElement.innerText = currentOperand;

    if(operation != null) {
        previousOperandTextElement.innerHTML = `${previousOperand}${operation}`;
    } else {
        previousOperandTextElement.innerText = previousOperand;
    }
}

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.innerText);
        updateDisplay();
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        chooseOperation(button.innerText);
        updateDisplay();
    })
})

equalsButton.addEventListener('click', () => {
    calculate();
    updateDisplay();
})

allClearButton.addEventListener('click', () => {
    clear();
    updateDisplay();
})

delButton.addEventListener('click', () => {
    del();
    updateDisplay();
})