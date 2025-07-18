
    function capitalizeEachWord() {
      const input = document.getElementById("textInput").value.trim();
      const resultDiv = document.getElementById("result");

      if (input === "") {
        resultDiv.innerHTML = "Please enter some text!";
        resultDiv.style.color = "#ffeb3b"; // Yellow for warning
        return;
      }

      const capitalized = input
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");

      resultDiv.innerHTML = `Result: ${capitalized}`;
      resultDiv.style.color = "#90ee90"; // Light green for success
    }
