
    let input = document.getElementById("input")
    let array = []

    function add() {
      array.push(input.value)
      input.value = ""
    }

    function display() {
      let displayBox = document.getElementById("display")
      displayBox.innerHTML = "Array Added [" + array + "]"
      displayBox.style.color = "green"
    }
