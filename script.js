// State Management
let totalBudget = 0;
let expenses = []; // Array storing expense objects

// DOM Element Selection
const budgetForm = document.getElementById('budget-form');
const budgetInput = document.getElementById('budget-input');
const expenseForm = document.getElementById('expense-form');
const expenseTitle = document.getElementById('expense-title');
const expenseAmount = document.getElementById('expense-amount');

const displayBudget = document.getElementById('display-budget');
const displaySpent = document.getElementById('display-spent');
const displayRemaining = document.getElementById('display-remaining');
const statusMessage = document.getElementById('status-message');
const expenseList = document.getElementById('expense-list');

// Event Listener 1: Setting Budget
budgetForm.addEventListener('submit', function (e) {
  e.preventDefault();
  totalBudget = parseFloat(budgetInput.value);
  updateDashboard();
  budgetInput.value = '';
});

// Event Listener 2: Adding Expense
expenseForm.addEventListener('submit', function (e) {
  e.preventDefault();
  
  const title = expenseTitle.value;
  const amount = parseFloat(expenseAmount.value);

  // Store expense in Array
  expenses.push({ title, amount });

  updateDashboard();

  // Reset form inputs
  expenseTitle.value = '';
  expenseAmount.value = '';
});

// Calculate Total Spent using Array Loop
function calculateTotalSpent() {
  let total = 0;
  // Loop processing array records
  for (let i = 0; i < expenses.length; i++) {
    total += expenses[i].amount;
  }
  return total;
}

// Update DOM and handle Logic Decision Making
function updateDashboard() {
  const spent = calculateTotalSpent();
  const remaining = totalBudget - spent;

  // Update text content in DOM
  displayBudget.textContent = `$${totalBudget.toFixed(2)}`;
  displaySpent.textContent = `$${spent.toFixed(2)}`;
  displayRemaining.textContent = `$${remaining.toFixed(2)}`;

  // Conditionals: Decision Making based on Spending
  if (totalBudget === 0) {
    statusMessage.textContent = 'Please set a budget to start tracking.';
    statusMessage.className = 'status neutral';
  } else if (remaining < 0) {
    statusMessage.textContent = 'Warning: You have exceeded your budget!';
    statusMessage.className = 'status danger';
  } else if (remaining <= totalBudget * 0.2) {
    statusMessage.textContent = 'Caution: You have used over 80% of your budget.';
    statusMessage.className = 'status warning';
  } else {
    statusMessage.textContent = 'Great job! Your spending is within budget.';
    statusMessage.className = 'status good';
  }

  renderExpenseList();
}

// Render Array items into DOM using Loop
function renderExpenseList() {
  expenseList.innerHTML = ''; // Clear existing DOM elements

  // Loop through expenses array to generate list items
  for (let i = 0; i < expenses.length; i++) {
    const item = document.createElement('li');
    item.innerHTML = `
      <span>${expenses[i].title}</span>
      <span>$${expenses[i].amount.toFixed(2)}</span>
    `;
    expenseList.appendChild(item);
  }
}