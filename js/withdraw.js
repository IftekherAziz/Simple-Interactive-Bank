/* Step 1: Add Event Listner to the withdraw button */
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    // Step 2: Get the amount deposited:
    const withdrawInput = document.getElementById("withdraw-input");
    const newWithdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountText);
    //console.log(newWithdrawAmount);

    // Step 3: Get current balance:
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    if (
      newWithdrawAmount == "" ||
      previousBalanceTotal - newWithdrawAmount < 1000 || newWithdrawAmount < 0
    ) {
      alert("You are not eligible to withdraw money.Please deposit first.");
      withdrawInput.value = "";
      return;
    } else {
      // Step 4: Get withdraw Amount:
      const withdrawTotal = document.getElementById("withdraw-total");
      const previousWithdrawText = withdrawTotal.innerText;
      const previousWithdrawAmount = parseFloat(previousWithdrawText);

      // Step 5: Update withdraw total:
      const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
      withdrawTotal.innerText = newWithdrawTotal;

      // Step 6: Update balance total:
      const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
      balanceTotal.innerText = newBalanceTotal;

      // Step 7: Clear the withdraw input field:
      withdrawInput.value = "";
    }
  });
