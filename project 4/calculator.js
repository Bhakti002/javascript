
const display = document.getElementById("display");

function appendValue(val) {
  display.value += val;   //it wiss show in the input box
}

function clearDisplay() {
  display.value = "";   //clear the input box (empty)
}

function deleteLast() {
  display.value = display.value.slice(0, -1);   // delete the last value with the help of slice
}

function calculate() {
  if (display.value !== "") {   //Checks if the input box is not empty
    display.value = eval(display.value);   //Solves the math expression typed in the input (like 5+3*2)
  } else {
    display.value = "Error";  //If the input is empty, it shows "Error"
  }
}

function square() {
  let num = Number(display.value);
  display.value = num * num;  
}

function cube() {
  let num = Number(display.value);
  display.value = num * num * num;
}

function root() {
  let num = Number(display.value);
  display.value = Math.sqrt(num);
}