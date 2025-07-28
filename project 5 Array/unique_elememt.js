    const array = ["21", "22", "23", "24", "25"];

    function checkElement() {
      const input = document.getElementById("textInput").value.trim().toLowerCase();
      const result = document.getElementById("result");

      if (input === "") {
        result.innerHTML = "Please enter a value!";
        result.className = "result warning show";
        return;
      }

      if (array.includes(input)) {
        result.innerHTML = `"${input}" is in the array.`;
        result.className = "result success show";
      } else {
        result.innerHTML = `"${input}" is NOT in the array.`;
        result.className = "result error show";
      }
    }
  