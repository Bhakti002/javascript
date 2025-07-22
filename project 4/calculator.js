const display = document.getElementById("display")

function appendValue(val) {
    display.value += val
}

function clearDisplay() {
    display.value = ""
}

function deleteLast() {
    display.value = display.value.slice(0, -1)
}

function calculate() {
  let result = eval(display.value)
  if (!isNaN(result)) {
    display.value = result
  } else {
    display.value = "Error"
  }
}


