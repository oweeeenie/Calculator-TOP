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

function operate(operator, numOne, numTwo) {
    switch(operator) {
        case "+":
            return add(numOne, numTwo);
        case "-":
            return sub(numOne, numTwo);
        case "*":
            return multiply(numOne, numTwo);
        case "/": 
            return divide(numOne, numTwo);
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
    const result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));       //parse float makes it a number even if its a decimal. "5.3" = 5.3.
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


particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#c3083f"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#ffffff"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#c3083f",
        "opacity": 0.75,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });