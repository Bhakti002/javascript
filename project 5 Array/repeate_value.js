
    let numList = [8, 12, 8, 15, 20, 12, 8, 25, 30, 8]

    document.getElementById("showArray").textContent = 
      "Array: [ " + numList.join(", ") + " ]"

    function checkCount() {
      let enteredNumber = document.getElementById("numberInput").value
      let output = document.getElementById("output")

      if (enteredNumber === "") {
        output.textContent = "Please enter a number."
        output.style.color = "red"
        return
      }

      let count = 0
      for (let i = 0; i < numList.length; i++) {
        if (numList[i] == enteredNumber) {
          count++
        }
      }

      if (count > 0) {
        output.textContent = 
          "Number " + enteredNumber + " is " + count + " times in the array."
        output.style.color = "green"
      } else {
        output.textContent = 
          "Sorry the number " + enteredNumber + " is not available!!"
        output.style.color = "grey"
      }
    }
