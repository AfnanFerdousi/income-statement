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
    let foodValue = food.value;
    let rentValue = rent.value;
    let clothValue = cloth.value;
    let incValue = income.value;
    const addExpenses = parseFloat(food.value) + parseFloat(rent.value) + parseFloat(cloth.value);
    const restBalance = parseFloat(incValue) - parseFloat(addExpenses);    
    // Negative Number Error Handling
    if (foodValue < 0 || rentValue < 0 || clothValue < 0 || incValue < 0) {
        if (foodValue < 0) {
            alert("Please enter a valid positive number in the FOOD input field!");
            clearInput();
        }
        else if (rentValue < 0) {
            alert("Please enter a valid positive number in the RENT input field!");
            clearInput();
        }
        else if (clothValue < 0 ) {
            alert("Please enter a valid positive number in the CLOTH input field!");
            clearInput();
        }
        else {
            alert("Please enter a valid positive number in the INCOME input field!");
            clearInput();
        }
    }
    else  {
        // Expense greater than income error handling
        if (addExpenses > incValue) {
            alert(`Your total expenses ${addExpenses} exceeded your income!!`);            
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
    let rateValue = rate.value;
    let balanceInner = balance.innerText;
    const percentage = parseFloat(rateValue) / 100;   
    const saveTotal = parseFloat(income.value) * parseFloat(percentage);  

    if (balanceInner < saveTotal) {
        alert(`your don't have sufficient balance to save ${saveTotal}`);
        clearInput();
    }   
    else {
        if (rateValue < 0) {
            alert("Please enter a valid positive number in the RATE input field!");
            clearInput();
        }
        else {
            saveAmount.innerText = saveTotal;   
            const balanceLeft = parseFloat(balanceInner) - saveAmount.innerText;
            remainingBalance.innerText = balanceLeft;
        }     
    }
})






