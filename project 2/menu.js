
let totalBill = 0
let ordering

do {
  alert(
    "------ Menu ------\n" +
    "1. Pizza : 150/-\n" +
    "2. Burger : 80/-\n" +
    "3. Pasta : 120/-\n" +
    "4. Sandwich : 70/-\n" +
    "5. Coffee : 50/-"
  )

  let choice = prompt("Enter item number (1 to 5):")
  let item = ""
  let price = 0

  switch (choice) {
    case "1":
      item = "Pizza";
      price = 150;
      break;
    case "2":
      item = "Burger";
      price = 80;
      break;
    case "3":
      item = "Pasta";
      price = 120;
      break;
    case "4":
      item = "Sandwich";
      price = 70;
      break;
    case "5":
      item = "Coffee";
      price = 50;
      break;
    default:
      alert("Invalid choice. Please select from 1 to 5.")
  }

  let qty = prompt(`How many ${item} would you like to order?`)
  qty = (qty)

  if (qty > 0) 
  {
    let itemTotal = price * qty
    totalBill = totalBill + itemTotal

    console.log("You ordered " , qty , " : " , item)
    console.log("Subtotal: " , itemTotal,"/-")
  } 
  else 
  {
    alert("Please enter valid quantity!!")
  }

  ordering = prompt("Do you want to order anything else? (yes/no)")
} while (ordering === "yes")

alert(`Your total bill is ${totalBill} /-`)
console.log(`Total Bill: ${totalBill} /-`)
