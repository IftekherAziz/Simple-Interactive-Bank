/* Step 1: Add Event Listner to the deposit button */
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    
    // Step 2: Get the amount deposited:
    const depositInput = document.getElementById("deposit-input");
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

    if (newDepositAmount > 0) {

      // Step: 3 Clear the deposit input field:
      depositInput.value = "";

      // Step 4: Get deposit total:
      const depositTotal = document.getElementById("deposit-total");
      const previousDepositText = depositTotal.innerText;
      const previousDepositAmount = parseFloat(previousDepositText);

      // Step 5: Update deposit total:
      const newDepositTotal = previousDepositAmount + newDepositAmount;
      depositTotal.innerText = newDepositTotal;

    // Step 6: Update account balance:
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

    } else {

      alert("Please enter a positive number");
      // Clear the deposit input field
      depositInput.value = "";
      
    }
  });
