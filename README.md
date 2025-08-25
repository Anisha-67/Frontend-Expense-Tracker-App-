# Frontend-Expense-Tracker-App-


In this project, i  created a personal expense tracker that allows users to manage their income and expenses.This is built using HTML,CSS,Javascript.This project helped me understand  JavaScript for dynamic updates,DOM manipulation, and handling data using local storage. 
This project  helped me  understand how to manage user input, perform calculations, and display data in a user-friendly format.


Functionality:
  1. Add Transactions:
        o When a user adds a transaction, it  appears in the transaction history list with:
               The transaction name.
               The transaction amount (positive for income, negative for expense).
      o The amount accepts only numbers, and negative values are  automatically converted to positive when saving as an expense.

  2. Transaction History:
        o Displays each transaction in a list format with its name, amount, and type (income or expense).
        o Each transaction has a delete button that allows the user to remove it from the list.

  3. Balance Calculation:
      o Displays the current balance (total income minus total expenses) at the top of the application.
      o Automatically updates the balance whenever a transaction is added or deleted.
  
  4. Data Persistence with Local Storage:
      o Stores all transactions in local storage so that the data persists even if the page is
      refreshed.
      o Loads transactions from local storage when the application starts.
 
  5. Validation and Error Handling:
      o Ensures that the user cannot add empty transactions or zero values.
      o Provide a warning message if a required field is missing (e.g., &quot;Please enter a valid input)
