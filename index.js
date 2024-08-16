let firstNumber = 6;
let operator = "+";
let secondNumber = 9;


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