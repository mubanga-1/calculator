const inputField = document.querySelector("#expression");
const numDiv = document.querySelector(".numbers");
const operatorDiv = document.querySelector(".operators");
const operators = {
    add: "+",
    subtract: "-",
    multiply: "*",
    divide: "/",
    evaluate: "=", 
}

for (let i = 9; i >= 0; i--) {
    let newChild = document.createElement("button");
    newChild.id = i;
    newChild.textContent = i;
    numDiv.appendChild(newChild);
}

for (let operator in operators) {
    let newChild = document.createElement("button");
    newChild.textContent = operators[operator];
    operatorDiv.appendChild(newChild);
}

