// Income
const income = document.getElementById("income");

// Expenses
const food = document.getElementById("food");
const rent = document.getElementById("rent");
const cloth = document.getElementById("cloth");

let totalExpense = document.getElementById("total-expense");
let balance = document.getElementById("balance");


// Calulate button function
document.getElementById("calculate").addEventListener('click', function () {
    
    // Negative Number Error Handling
    if (food.value < 0 || rent.value < 0 || cloth.value < 0 || income.value < 0) {
        alert("Please enter a valid number!")        
    }

    else {
    const addExpenses = parseFloat(food.value) + parseFloat(rent.value) + parseFloat(cloth.value);
    totalExpense.innerText = addExpenses;
    
    const restBalance = parseFloat(income.value) - parseFloat(addExpenses);
    balance.innerText = restBalance;
    }    
})




