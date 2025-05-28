let balance = 0;

function updateDisplay() {
  const balanceDisplay = document.getElementById("balance");
  balanceDisplay.textContent = `$${balance.toFixed(2)}`;
  balanceDisplay.style.color = balance >= 0 ? "green" : "red";
}

function getAmount() {
  const amountInput = document.getElementById("amount");
  const amount = parseFloat(amountInput.value);
  return isNaN(amount) ? 0 : amount;
}

function addMoney() {
  const amount = getAmount();
  balance += amount;
  updateDisplay();
}

function subtractMoney() {
  const amount = getAmount();
  balance -= amount;
  updateDisplay();
}

function reset() {
  balance = 0;
  updateDisplay();
  document.getElementById("amount").value = "";
}

updateDisplay(); // Initialize on page load
