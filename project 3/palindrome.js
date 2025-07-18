
    function checkPalindrome() 
    {
      let num = document.getElementById("numberInput").value;

      let reverse = num.split('').reverse().join('')


      let result = document.getElementById("result")

      if (num === "") 
      {
        result.innerHTML = "Please enter a number!"
        result.style.color = "yellow"
        return;
      }
 
      if (num === reverse) 
      {
        result.innerHTML = `${num} is a Palindrome! `
        result.style.color = "green"
      } 

      else 
      {
        result.innerHTML = `${num} is not a Palindrome `
        result.style.color = "red"
      }
    }
