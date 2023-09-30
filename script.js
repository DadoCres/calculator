const numberButtons = document.querySelectorAll('[data-number]');
const operationButton = document.querySelectorAll('[data-operation]');
const delButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const equalsButton = document.querySelector('[data-equals]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

function appendNumber(number) {
    if(number === '.' && currentOperandTextElement.innerHTML.includes('.')) return;
    currentOperandTextElement.innerHTML += number;
}

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.innerText);
    })
})