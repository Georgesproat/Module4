let display = document.getElementById("display");
let num1, num2, operator;

function appendToDisplay(value) {
  display.value += value;
}

function setOperator(op) {
  operator = op;
  num1 = parseFloat(display.value);
  display.value = "";
}

function calculate() {
  if (num1 !== null && operator !== null && display.value !== "") {
    num2 = parseFloat(display.value);
    let result;

    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "x":
        result = num1 * num2;
        break;
      case "/":
        result = num2 !== 0 ? num1 / num2 : "Error";
        break;
    }

    display.value = result;
    num1 = result;
    num2 = null;
    operator = null;
  }
}

function reset() {
  display.value = "";
  num1 = null;
  num2 = null;
  operator = null;
}
