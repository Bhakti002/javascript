// interest

let principal = Number(prompt("enter the principal amount:"))    
console.log(principal);        

let rate = Number(prompt("enter the rate of interest"))  
console.log(rate);

let number = Number(prompt("enter the time in years:-"))  
console.log(number);

let interest = (principal * rate * number) / 100;
console.log("your Interest is = " ,interest,"/-")
