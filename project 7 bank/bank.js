// BankAccount class to manage deposit, withdraw, and transaction history
class BankAccount {
  constructor() {
    // Load balance from localStorage or set to 0
    this.balance = parseFloat(localStorage.getItem("balance")) || 0;
    this.previousBalance = this.balance;
  }

  // Save balance to localStorage
  saveBalance() {
    localStorage.setItem("balance", this.balance.toFixed(2));
    localStorage.setItem("transactions", JSON.stringify(this.transactions));
  }

  // Update the balance shown on the webpage
  updateUI() {
    document.getElementById("balanceDisplay").textContent = "₹" + this.balance.toFixed(2);
  }

  // Add a transaction row (Deposit or Withdraw) to the table
  addTransaction(type, amount) {
    const table = document.getElementById("transactionTable").getElementsByTagName("tbody")[0];
    const row = document.createElement("tr");
    const date = new Date().toLocaleString();

    row.innerHTML = `
      <td>${date}</td>
      <td style="color: ${type === "Deposit" ? "green" : "red"}">${type}</td>
      <td>₹${amount.toFixed(2)}</td>
      <td>₹${this.previousBalance.toFixed(2)} → ₹${this.balance.toFixed(2)}</td>
    `;

    table.prepend(row);
  }

  // Get the input amount and validate it
  getAmount() {
    const input = document.getElementById("amountInput");
    const errorMsg = document.getElementById("errorMsg");
    let amount = parseFloat(input.value);

    input.value = "";

    if (amount > 0) {
      errorMsg.textContent = "";
      return amount;
    } else {
      errorMsg.textContent = "Please enter a valid positive amount.";
      return null;
    }
  }

  // Handle deposit action
  deposit() {
    const amount = this.getAmount();

    if (amount !== null) {
      this.previousBalance = this.balance;
      this.balance += amount;
      this.saveBalance();           // Save to localStorage
      this.updateUI();
      this.addTransaction("Deposit", amount);
      console.log(`Previous Balance: ₹${this.previousBalance.toFixed(2)}`);
    }
  }

  // Handle withdraw action
  withdraw() {
    const amount = this.getAmount();
    const errorMsg = document.getElementById("errorMsg");

    if (amount !== null) {
      if (amount <= this.balance) {
        this.previousBalance = this.balance;
        this.balance -= amount;
        this.saveBalance();         // Save to localStorage
        this.updateUI();
        this.addTransaction("Withdraw", amount);
        errorMsg.textContent = "";
        console.log(`Previous Balance: ₹${this.previousBalance.toFixed(2)}`);
      } else {
        errorMsg.textContent = "Insufficient balance.";
      }
    }
  }
}

// Create the account and initialize UI
const account = new BankAccount();
account.updateUI();
