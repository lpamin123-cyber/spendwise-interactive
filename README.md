# SpendWise Interactive Budget Tracker

## Improvements Made
This week, SpendWise was updated from a static interface into a fully dynamic web application. Key improvements include dynamic budget updates, immediate feedback alerts based on spending thresholds, and a live rendering expense history list.

## Core Concepts Implemented

### 1. Conditionals
Conditionals evaluate spending states in `updateDashboard()`:
- Checks if the user has set a budget (`totalBudget === 0`).
- Flags when the user exceeds their overall budget (`remaining < 0`).
- Alerts when remaining funds drop below 20% of the initial budget (`remaining <= totalBudget * 0.2`).
- Displays a positive status message when budget health is stable.

### 3. Arrays
Arrays are used to aggregate and structure data records. Instead of managing individual variables for every input, spending entries are stored in a centralized array of objects:
`expenses = [{ title: "Groceries", amount: 50 }]`

### 3. DOM Updates
DOM properties (`textContent`, `className`, and `innerHTML`) dynamically update the application view without requiring a browser refresh:
- Dashboard values (`#display-budget`, `#display-spent`, `#display-remaining`) reflect updated totals.
- Status card classes switch dynamically (`.good`, `.warning`, `.danger`) to provide color-coded visual cues.

### 4. Event Handling
JavaScript `addEventListener` methods handle user interactions:
- `submit` on `#budget-form` captures and updates total budget.
- `submit` on `#expense-form` handles creation of new expense records and updates UI state.

## Challenges & Solutions
* **Challenge:** Preventing page reloads on form submission.
* **Solution:** Used `e.preventDefault()` inside event handler callbacks to intercept default form behavior and execute custom script updates.