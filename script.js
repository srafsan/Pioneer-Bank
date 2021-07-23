function updateSpanText(id, amount) {
    const current = parseFloat(document.getElementById(id).innerText);
    const total = amount + current;
    document.getElementById(id).innerText = total;
}

// Login button event handler
const loginBtn = document.getElementById('login-button');
loginBtn.addEventListener('click', function () {
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';

    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block';
})

// Deposit button event handler
const depositBtn = document.getElementById('deposit-button');
depositBtn.addEventListener('click', function () {
    const depositAmount = parseFloat(document.getElementById('deposit-amount').value);
    updateSpanText('current-deposit', depositAmount);
    updateSpanText('current-balance', depositAmount);

    document.getElementById('deposit-amount').value = "";
})

// Withdraw Button event handler
const withdrawBtn = document.getElementById('withdraw-button');
withdrawBtn.addEventListener('click', function () {
    const withdrawAmount = parseFloat(document.getElementById('withdraw-amount').value);
    updateSpanText('current-withdraw', withdrawAmount);
    updateSpanText('current-balance', -1 * withdrawAmount);

    document.getElementById('withdraw').value = "";
})