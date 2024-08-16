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

const numberButtons = document.querySelectorAll(".btn:not(.symbol)");       //this is super cool, :not makes it so it only chooses THE NUMBERS/decimal. not symbols.
const operatorButtons = document.querySelectorAll(".btn.symbol");
const equalsButton = document.querySelector("#equals");
const clearButton = document.querySelector("#clear");
const deleteButton = document.querySelector("#delete");
let displayContent = "";
let firstNumber = ""
let operator = ""
let secondNumber = ""

function updateDisplay() {
    document.querySelector("#display").textContent = displayContent;
}

numberButtons.forEach(button => {
    button.addEventListener("click" , (e) => {          // (e) is a paramater. you can use whatever u want.
        if (e.target.textContent === "." && displayContent.includes(".")) return;
        displayContent += e.target.textContent;
        updateDisplay();
    });
});

operatorButtons.forEach(button => {
    button.addEventListener("click" , (e) => {
        if (displayContent === "") return;
        firstNumber = displayContent;
        operator = e.target.textContent;
        displayContent = "";
        }); 
});

equalsButton.addEventListener("click" , () => {
    if (displayContent === "" || firstNumber === "" || operator === "") return; // this is a guard, to make sure theres actual buttons clicked. doent execute below if no buttons are pressed.
    secondNumber = displayContent;
    const result = operate(operator , parseFloat(firstNumber) , parseFloat(secondNumber));          // parsefloat convert strings to numbers.
    displayContent = result.toString();
    updateDisplay();
    firstNumber = "";           //the next 3 lines reset it for the calculcation.
    operator = "";
    secondNumber = "";
});

clearButton.addEventListener("click" , () => {
    displayContent = "";
    firstNumber = "";
    operator = "";
    secondNumber = "";
    updateDisplay();
});

deleteButton.addEventListener("click" , () => {
    if (displayContent.length > 0) {
        displayContent = displayContent.slice(0, -1);
        updateDisplay();
    }
});
