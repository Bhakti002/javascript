
    function changeCase() {
      let text = document.getElementById("userText").value
      let output = document.getElementById("resultBox")

      if (text === "") {
        output.textContent = "Please enter some text."
        output.style.color = "red"
        return
      }

      let newText = ""
      for (let i = 0; i < text.length; i++) {
        let letter = text[i]
        if (letter === letter.toUpperCase()) {
          newText += letter.toLowerCase()
        } else {
          newText += letter.toUpperCase()
        }
      }

      output.textContent = "Result: " + newText
      output.style.color = "green"
    }
