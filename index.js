function add(numOne , numTwo) {
    return numOne + numTwo;
}

function sub(numOne , numTwo) {
    return numOne - numTwo;
}

function multiply(numOne , numTwo) {
    return numOne * numTwo;
}

function divide(numOne , numTwo) {
    if (numTwo === 0) return "error"
    return numOne / numTwo;
}

function operate(operator , numOne , numTwo) {
    switch(operator) {
        case "+" :
            return add(numOne , numTwo);
        case "-" :
            return sub(numOne , numTwo);
        case "*" :
            return multiply(numOne , numTwo);
        case "/" : 
            return divide(numOne , numTwo);
        default: 
            return "Invalid Operator";
    }
}

const numberButtons = document.querySelectorAll(".btn:not(.operation)");
const operatorButtons = document.querySelectorAll(".operation");
const equalsButton = document.querySelector("#equals");
const clearButton = document.querySelector("#clear");
const deleteButton = document.querySelector("#delete");

let displayContent = "";
let firstNumber = "";
let operator = "";
let secondNumber = "";

function updateDisplay() {
    document.querySelector("#display").textContent = `${firstNumber} ${operator} ${displayContent}`;
}

numberButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        console.log("Number button clicked:", e.target.textContent);
if (operator && displayContent === "" && !e.target.textContent.includes(".")) {
            displayContent = e.target.textContent;
        } else {
            if (e.target.textContent === "." && displayContent.includes(".")) return;
            displayContent += e.target.textContent;
        }
        updateDisplay();
    });
});

operatorButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        const clickedOperator = e.target.textContent;

        if (displayContent === "" && operator === "") return;

        if (firstNumber === "") {
            firstNumber = displayContent;
            operator = clickedOperator;
            displayContent = "";
        } else if (operator !== "") {
            secondNumber = displayContent;
            const result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
            displayContent = result.toString();
            firstNumber = displayContent;
            operator = clickedOperator;
            displayContent = "";
        } else {
            operator = clickedOperator;
        }
        updateDisplay();
    });
});

equalsButton.addEventListener("click", () => {
    if (displayContent === "" || firstNumber === "" || operator === "") return;

    secondNumber = displayContent;
    const result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
    displayContent = result.toString();
    firstNumber = "";
    operator = "";
    secondNumber = "";
    updateDisplay();
});

clearButton.addEventListener("click", () => {
    displayContent = "";
    firstNumber = "";
    operator = "";
    secondNumber = "";
    updateDisplay();
});

deleteButton.addEventListener("click", () => {
    if (displayContent.length > 0) {    
        displayContent = displayContent.slice(0, -1);
        updateDisplay();
    }
});


