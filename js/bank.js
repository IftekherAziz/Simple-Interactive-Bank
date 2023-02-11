// Step 1: Get the deposit button and add a click event listener:
document.getElementById('btn-deposit').addEventListener('click', function () {
    // Step 2: Get the deposit amount from the deposit input field:
    const depositField = document.getElementById('deposit-amount');

    // For input field we use .value property instead of .innerText
    const newDepositAmount = depositField.value;
  
    // Step 3: Get the current deposit total:
    // For non-input field we use .innerText property instead of .value
    const depositTotal = document.getElementById("deposit-total");
    const previousDepositAmount = depositTotal.innerText;
  
    // Step 4: Update deposit total:
    const currentDepositTotal = parseFloat(previousDepositAmount) + parseFloat(newDepositAmount);
    depositTotal.innerText = currentDepositTotal;
 
    // Step 5: Update account balance:
    const balanceTotal = document.getElementById("balance-total");
    const previousBalanceTotal = balanceTotal.innerText;
  
    // Step 6: Update balance total:
    const currentBalanceTotal = parseFloat(previousBalanceTotal) + parseFloat(newDepositAmount);
    balanceTotal.innerText = currentBalanceTotal;

    // Step 7: Clear the deposit input field:
    depositField.value = '';
});

/* -----------------------------Withdraw Money------------------------------------------- */

// Step 1: Get the withdraw button and add a click event listener:
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // Step 2: Get the withdraw amount from the withdraw input field:
    const withdrawField = document.getElementById('withdraw-amount');
    const newWithdrawAmount = withdrawField.value;
    
    // Step 3: Get the current withdraw total:
    const withdrawTotal = document.getElementById("withdraw-total");
    const previousWithdrawAmount = withdrawTotal.innerText;
    
    // Step 4: Update withdraw total:
    const currentWithdrawTotal = parseFloat(previousWithdrawAmount) + parseFloat(newWithdrawAmount);
    withdrawTotal.innerText = currentWithdrawTotal;
    
    // Step 5: Update account balance:
    const balanceTotal = document.getElementById("balance-total");
    const previousBalanceTotal = balanceTotal.innerText;
    
    // Step 6: Update balance total:
    const currentBalanceTotal = parseFloat(previousBalanceTotal) - parseFloat(newWithdrawAmount);
    balanceTotal.innerText = currentBalanceTotal;
    
    // Step 7: Clear the withdraw input field:
    withdrawField.value = '';
    });