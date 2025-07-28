
    function checkAge() {
      let age = document.getElementById("age").value;
      let result = document.getElementById("result");

      if (age <= 12) {
        result.textContent = "Not eligible";
        result.style.color = "red";
      } else if (age >= 25) {
        result.textContent = "You are older";
        result.style.color = "orange";
      } else if (age >= 18) {
        result.textContent = "You are eligible";
        result.style.color = "green";
      } else {
        result.textContent = "You are not eligible yet";
        result.style.color = "blue";
      }
    }
  