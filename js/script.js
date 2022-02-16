// Income
const income = document.getElementById("income");
// Expenses
const food = document.getElementById("food");
const rent = document.getElementById("rent");
const cloth = document.getElementById("cloth");
// calculate button
let calculate = document.getElementById("calculate");
let totalExpense = document.getElementById("total-expense");
let balance = document.getElementById("balance");
// Save button
let save = document.getElementById("save");
const rate = document.getElementById("rate");
const saveAmount = document.getElementById("save-amount");
const remainingBalance = document.getElementById("remaining-balance");

// Clear input function
function clearInput() {
    food.value = "";
    rent.value = "";
    cloth.value = "";
    income.value = "";
    rate.value = "";
}

// Calulate button function
calculate.addEventListener('click', function () {    
    const addExpenses = parseFloat(food.value) + parseFloat(rent.value) + parseFloat(cloth.value);
    const restBalance = parseFloat(income.value) - parseFloat(addExpenses);    
    // Negative Number Error Handling
    if (food.value < 0 || rent.value < 0 || cloth.value < 0 || income.value < 0) {
        alert("Please enter a valid number!")        
    }
    else {
        // Expense greater than income error handling
        if (addExpenses > income.value) {
            alert("Please Re-check you income");
            // food.value = "";
            // rent.value = "";
            // cloth.value = "";
            // income.value = "";
            clearInput();
        }     
        else {
            totalExpense.innerText = addExpenses;
            balance.innerText = restBalance;            
        }    
    }    
})
// Save button function
save.addEventListener('click', function () {  
    const percentage = parseFloat(rate.value) / 100;   
    const saveTotal = parseFloat(income.value) * parseFloat(percentage);  

    if (balance.innerText < saveTotal) {
        alert("you have exceded your limit");
        clearInput();
    }   
    else {
    saveAmount.innerText = saveTotal;   
    const remain = parseFloat(balance.innerText) - saveAmount.innerText;
    remainingBalance.innerText = remain; 
    }
})






