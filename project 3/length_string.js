
    function findLength() {
      const str = document.getElementById("textInput").value;
      const result = document.getElementById("result");

      if (str.trim() === "") {
        result.innerHTML = "Please enter a string!";
        result.style.color = "#ffeb3b"; // yellow
        return;
      }

      let count = 0;
      while (str[count] !== undefined) {
        count++;
      }

      result.innerHTML = `Length: ${count}`;
      result.style.color = "#7CFC00"; // light green
    }
  