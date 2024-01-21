const display = document.querySelector("#display");
const numbers = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operator");
const calculate = document.querySelector("#calculate");
const clearScreen = document.querySelector("#clrScreen");
const backspaceButton = document.querySelector("#backspace");

let currentInput = ""; 
let currentOperator = "";

// Event listener for number buttons
numbers.forEach((button) => {
  button.addEventListener("click", () => {
    currentInput += button.textContent;
    display.value = currentInput;
  });
});

// Event listener for operator buttons
operators.forEach((button) => {
  button.addEventListener("click", () => {
    currentOperator = button.textContent.replace("x", "*");
    
    currentInput += " " + currentOperator + " "; 
    display.value = currentInput;
  });
});

// Event listener for the calculate button
calculate.addEventListener("click", () => {
  try {
    // Evaluate the expression and display the result
    if (currentInput.trim() === "") { 
      display.value = " ";
    } else {
      display.value = `= ${eval(currentInput)}`;
      currentInput = display.value; 
      currentInput = " ";
    }
  } catch (error) {
    display.value = "Error";
    currentInput = ""; // Reset current input in case of an error
  }
});

// Event listner for backspace button
backspaceButton.addEventListener("click", () => {
  currentInput = currentInput.slice(0, -1);
  display.value = currentInput;
});

// Event listener for the clear screen button
clearScreen.addEventListener("click", () => {
  currentInput = "";
  display.value = "";
});