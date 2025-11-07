let budgetValue = 0;
let totalExpensesValue = 0;
let expenseEntries = 
[
    ["groceries", 33],
    ["restaurants", 50],
    ["transport", 12],
    ["home", 70],
    ["subscriptions", 14],
    ["groceries", 28],
    ["subscriptions",12]
];
let expensesAverage = 0;
let balanceColor = "green";


for(number of expenseEntries){
    totalExpensesValue += number[1];
    console.log("valor total de despesas: ", totalExpensesValue);
}

function calculateAverageExpense(){
    
    if(expenseEntries.length === 0){
        return 0;
   }else{
        expensesAverage = totalExpensesValue / expenseEntries.length;
    return expensesAverage;
   }
}
console.log("média das despesas: ", calculateAverageExpense().toFixed(2));


function calculateBalance(){
    return budgetValue - totalExpensesValue;
}

function updateBalanceColor(){
    if (calculateBalance() < 0){
        balanceColor = "red";
    } else if (calculateBalance() < budgetValue * 0.25){
        balanceColor = "orange";
    } else {
        balanceColor = "green";
    }
}

function calculateCategoryExpenses(category){
    let categoryTotal = 0;
    for (expense of expenseEntries){
        if (expense[0] === category){
            categoryTotal = categoryTotal + expense[1];
            return categoryTotal;
        }          
    }}


    function calculateLargestCategory(){
        let categoryName =[
        ["groceries"],
        ["restaurants"],
        ["transport"],
        ["home"],
        ["subscriptions"]]
        let largestCategoryName = "";     // ← Guarda o NOME
    let largestCategoryValue = 0;     // ← Guarda o VALOR
    
    for (let i = 0; i < categoryName.length; i++){
        let categoryTotal = calculateCategoryExpenses(categoryName[i][0]);
        if (categoryTotal > largestCategoryValue) {
            largestCategoryValue = categoryTotal;    
            largestCategoryName = categoryName[i][0];
        }
    }
    
    return largestCategoryName;
}

    
function addExpenseEntry([category, value]){
    totalExpensesValue += value;
    expenseEntries.push([category, value]);
} 
//a unica coisa que não ta funcionando é atualizar o valor da maior categoria na tela depois de adicionar uma despesa nova, o projeto não menciona isso também
//tentei adicionar uma condição if pra checar o valor maior e atualiza-lo, mas não rolou, também tentei alterar a ordem do código e não deu certo
//Não faz o menor sentido pra mim, eu realmente não gostei desse formato de projeto onde não sei o que está acontecendo nos outros arquvios .js

