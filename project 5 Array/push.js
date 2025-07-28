
    let itemList = ["10", "20", "30"];

    function insertValue() {
      let newValue = document.getElementById("valueInput").value.trim();
      let message = document.getElementById("message");
      let arrayOutput = document.getElementById("arrayOutput");

      if (!newValue) {
        message.textContent = "Please enter a value.";
        message.style.color = "red";
      } else if (itemList.indexOf(newValue) === -1) {
        itemList.push(newValue);
        message.textContent = `"${newValue}" added successfully.`;
        message.style.color = "green";
      } else {
        message.textContent = `"${newValue}" already exists.`;
        message.style.color = "orange";
      }

      arrayOutput.textContent = `Current List: [ ${itemList.join(", ")} ]`;
      document.getElementById("valueInput").value = "";
    }
  