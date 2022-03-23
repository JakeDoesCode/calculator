let currentNum = "";
let previousNum = "";
let operator = "";

const currentDisplayNumber = document.querySelector(".currentNumber");
const previousDisplayNumber = document.querySelector(".previousNumber");

window.addEventListener("keydown", handleKeyPress);
//if equal button is clicked, checks both numbers are defined
const equal = document.querySelector("#btnEqual");
equal.addEventListener("click", () => {
  if (currentNum != "" && previousNum != "") {
    compute();
  }
});


const decimal = document.querySelector("#btnDec");
decimal.addEventListener("click", () => {
  addDecimal();
});


const clear = document.querySelector("#btnClear");
clear.addEventListener("click", clearCalculator);


const numberButtons = document.querySelectorAll(".number");

const operators = document.querySelectorAll(".operator");

//when number is clicked pull text content from button and handleNumver
numberButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    handleNumber(e.target.textContent);
  });
});

// takes in number and checks if a previous number has been entered, if yes, and an operator has not been pressed, concats the numbers
function handleNumber(number) {
  if (previousNum !== "" && currentNum !== "" && operator === "") {
    previousNum = "";
    currentDisplayNumber.textContent = currentNum;
  }
  if (currentNum.length <= 11) {
    currentNum += number;
    currentDisplayNumber.textContent = currentNum;
  }
}
// listens for operator
operators.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    handleOperator(e.target.textContent);
  });
});
// checks if numbers were input if both numbers in equasion are defined, runs compute
function handleOperator(op) {
  if (previousNum === "") {
    previousNum = currentNum;
    operatorCheck(op);
  } else if (currentNum === "") {
    operatorCheck(op);
  } else {
    compute();
    operator = op;
    currentDisplayNumber.textContent = "0";
    previousDisplayNumber.textContent = previousNum + " " + operator;
  }
}
// if op selected, assigns text to previous display number
function operatorCheck(text) {
  operator = text;
  previousDisplayNumber.textContent = previousNum + " " + operator;
  currentDisplayNumber.textContent = "0";
  currentNum = "";
}
//compares operator string to specific operator executes appropriate math and assigns value to currentNum
function compute() {
  previousNum = parseFloat(previousNum);
  currentNum = parseFloat(currentNum);

  if (operator === "+") {
    previousNum += currentNum;
  } else if (operator === "-") {
    previousNum -= currentNum;
  } else if (operator === "x") {
    previousNum *= currentNum;
  }
   else if (operator === "/") {
    if (currentNum <= 0) {
      previousNum = "Error";
      displayResults();
      alert("One does not simply divide by zero.")
      return;
    }
    previousNum /= currentNum;
  }
  //rounds number and displays results
  previousNum = roundNumber(previousNum);
  previousNum = previousNum.toString();
  displayResults();
}

function roundNumber(num) {
  return Math.round(num * 100000) / 100000;
}
//displays number or removes additional numbers after 11th digit then reassigns to blank strings
function displayResults() {
  if (previousNum.length <= 11) {
    currentDisplayNumber.textContent = previousNum;
  } else {
    currentDisplayNumber.textContent = previousNum.slice(0, 11) + "...";
  }
  previousDisplayNumber.textContent = "";
  operator = "";
  currentNum = "";
}

//resets all variables
function clearCalculator() {
  currentNum = "";
  previousNum = "";
  operator = "";
  currentDisplayNumber.textContent = "0";
  previousDisplayNumber.textContent = "";
}

//adds decimal place
function addDecimal() {
  if (!currentNum.includes(".")) {
    currentNum += ".";
    currentDisplayNumber.textContent = currentNum;
  }
}

//keyboard functionality

function handleKeyPress(e) {
  e.preventDefault();
  if (e.key >= 0 && e.key <= 9) {
    handleNumber(e.key);
  }
  if (
    e.key === "Enter" ||
    (e.key === "=" && currentNum != "" && previousNum != "")
  ) {
    compute();
  }
  if (e.key === "+" || e.key === "-" || e.key === "/") {
    handleOperator(e.key);
  }
  if (e.key === "*") {
    handleOperator("x");
  }
  if (e.key === ".") {
    addDecimal();
  }
  if (e.key === "Backspace") {
    handleDelete();
  }
}

function handleDelete() {
  if (currentNum !== "") {
    currentNum = currentNum.slice(0, -1);
    currentDisplayNumber.textContent = currentNum;
    if (currentNum === "") {
      currentDisplayNumber.textContent = "0";
    }
  }
  if (currentNum === "" && previousNum !== "" && operator === "") {
    previousNum = previousNum.slice(0, -1);
    currentDisplayNumber.textContent = previousNum;
  }
}