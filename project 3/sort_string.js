
    function sortString() {
      const input = document.getElementById("textInput").value.trim();
      const resultDiv = document.getElementById("result");

      if (input === "") {
        resultDiv.innerHTML = "Please enter a string!";
        resultDiv.style.color = "#ffeb3b";
        return;
      }

      const sorted = input.toLowerCase().split("").sort().join("");
      resultDiv.innerHTML = `Sorted: ${sorted}`;
      resultDiv.style.color = "#bbffbb";
    }
