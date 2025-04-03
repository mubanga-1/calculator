// Select the input element, clear button and equals button
const inputField = document.querySelector("#expression");
const clearBtn = document.querySelector("#clear");
const evaluateBtn = document.querySelector("#evaluate");

// Select .numbers div and initialize array for each button's id value
const numDiv = document.querySelector(".numbers");
const numBtnIds = [];

// Select .operations div to insert operator buttons in later
const operationsDiv = document.querySelector(".operations");

// Make object for each operator
const operators = {
    add: "+",
    subtract: "-",
    multiply: "*",
    divide: "/", 
}

// Add number buttons 0 through 9 and insert it's id into numBtnIds array
for (let i = 9; i >= 0; i--) {
    let newChild = document.createElement("button");
    newChild.value = i;
    newChild.id = i;
    numBtnIds.push(newChild.id);
    newChild.textContent = i;
    numDiv.appendChild(newChild);
}

// Add operator buttons with value of each key in the operators object
for (let operator in operators) {
    let newChild = document.createElement("button");
    newChild.id = operator;
    newChild.value = operators[operator];
    newChild.textContent = operators[operator];
    operationsDiv.appendChild(newChild);
}

// Ensure that each button's value is displayed on inputField when it's clicked
numDiv.addEventListener("click", (event) => {
    let target = event.target;

    if (numBtnIds.includes(target.id)) {
        inputField.value += target.value;
    }
    
});

// Ensure that value of each operator key from operators object is displayed when clicked
operationsDiv.addEventListener("click", (event) => {
    let target = event.target;

    if (target.id in operators) {
        inputField.value += target.value;
    }
});

// Ensure that all text is removed from inputField if clearBtn is clicked
clearBtn.addEventListener("click", () => {
    inputField.value = ""; 
});


// Ensure to evaluate an expression if any when equals button is clicked
evaluateBtn.addEventListener("click", () => {
    const expression = inputField.value;
    for (let operator in operators) {

        if (expression.includes(operators[operator])) {
            const numbers = expression.split(operators[operator])
            .map((number) => parseFloat(number));

            switch (operators[operator]) {
                case "+":
                    inputField.value = numbers.reduce((total, currentValue) => total + currentValue);
                    break;
                case "-":
                    inputField.value = numbers.reduce((total, currentValue) => total - currentValue);
                    break;
                case "*":
                    inputField.value = numbers.reduce((total, currentValue) => total * currentValue);
                    break;
                case "/":
                    inputField.value = numbers.reduce((total, currentValue) => total / currentValue);
                    break;
            }
        } 
    }
           
});