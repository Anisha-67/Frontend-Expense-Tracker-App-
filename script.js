// script.js

// DOM Elements
const balanceEl = document.getElementById('balance');
const transactionForm = document.getElementById('transactionForm');
const transactionName = document.getElementById('transactionName');
const transactionAmount = document.getElementById('transactionAmount');
const transactionType = document.getElementById('transactionType');
const transactionList = document.getElementById('transactionList');

// Reads the transactions  from local storage
//if there are no transactions ...there will be an empty array
let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

// splits the transaction into income or expense
function updateBalance() {
    const income = transactions
        .filter(t => t.type === 'income')
        .reduce((sum, t) => sum + t.amount, 0);


    const expense = transactions
        .filter(t => t.type === 'expense')
        .reduce((sum, t) => sum + t.amount, 0);
//calculates and displays balance
    const total = income - expense;
    balanceEl.textContent = total.toFixed(2);
}

//renders the transaction
function renderTransactions() {
    transactionList.innerHTML = '';

    transactions.forEach((t, index) => {
        const li = document.createElement('li');
        li.classList.add('transaction-item', t.type);
        li.innerHTML = `
            ${t.name} - $${t.amount.toFixed(2)}
            <button class="delete-btn" onclick="deleteTransaction(${index})">x</button>
        `;
        transactionList.appendChild(li);
    });
}

// save data to local storage
function saveToLocalStorage() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

//add a transaction
transactionForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = transactionName.value.trim();
    const amount = parseFloat(transactionAmount.value.trim());
    const type = transactionType.value;

    if (!name || isNaN(amount) || amount <= 0) {
        alert('Please enter valid name and amount');
        return;
    }

    const newTransaction = {
        name,
        amount,
        type
    };

    transactions.push(newTransaction);
    saveToLocalStorage();
    renderTransactions();
    updateBalance();

    // Clear input fields
    transactionName.value = '';
    transactionAmount.value = '';
});

//delete transaction
function deleteTransaction(index) {
    transactions.splice(index, 1);
    saveToLocalStorage();
    renderTransactions();
    updateBalance();
}
//page load
renderTransactions();
updateBalance();

