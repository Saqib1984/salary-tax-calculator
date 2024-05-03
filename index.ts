#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

// Create tscongig file and make changes "es2022", "NodeNext" 
// Create package.json file and add "type" :  "module"
// install Inquirer and its dependencies
// install chalk
let annualIncome1 = 600000
let taxRate1 = (2.5/100)/12
let annualIncome2 = 1200000
let taxRate2 = (12.5/100)/12
let taxRateAdd2 = (15000/12)
let annualIncome3 = 2400000
let taxRate3 = (22.5/100)/12
let taxRateAdd3 = (165000/12)
let annualIncome4 = 3600000
let taxRate4 = (27.5/100)/12
let taxRateAdd4 = (435000/12)
let annualIncome5 = 6000000
let taxRate5 = (35/100)/12
let taxRateAdd5 = (1095000/12)  

let condition = true;
while (condition){

    let ans = await inquirer.prompt([{
        type: "number",
        name: "monthlySalary",
        message: chalk.yellow.bold("Enter Monthly Salary"),
    },
    {
        type: "number",
        name: "monthlyAllownce",
        message: chalk.blue.bold("Enter Monthly Taxable Allownce")
    }
  ])
let monthlySalary = ans.monthlySalary + ans.monthlyAllownce
console.log(chalk.green.bold(`Monthly Salary Rs. ${ans.monthlySalary}`))
let yearlySalary = monthlySalary*12
if(yearlySalary > annualIncome5){
    let taxSalary5 = (yearlySalary-annualIncome5)*taxRate5+taxRateAdd5
let netSalary5 = monthlySalary - taxSalary5
    console.log(chalk.yellow.bold(`Your monthly taxable salary is Rs. ${monthlySalary} and monthly tax is Rs. ${taxSalary5.toFixed(2)} and Your Net Salary Is Rs.${netSalary5}`))

}else if (yearlySalary > annualIncome4){
    let taxSalary4 = (yearlySalary-annualIncome4)*taxRate4+taxRateAdd4
let netSalary4 = monthlySalary - taxSalary4
    console.log(chalk.yellow.bold(`Your monthly taxable salary is Rs. ${monthlySalary} and monthly tax is Rs. ${taxSalary4.toFixed(2)} and Your Net Salary Is Rs.${netSalary4}`))

}else if (yearlySalary > annualIncome3){
    let taxSalary3 = (yearlySalary-annualIncome3)*taxRate3+taxRateAdd3
let netSalary3 = monthlySalary - taxSalary3
    console.log(chalk.yellow.bold(`Your monthly taxable salary is Rs. ${monthlySalary} and monthly tax is Rs. ${taxSalary3.toFixed(2)} and Your Net Salary Is Rs.${netSalary3}`))

}else if (yearlySalary > annualIncome2){
    let taxSalary2 = (yearlySalary-annualIncome2)*taxRate2+taxRateAdd2
let netSalary2 = monthlySalary - taxSalary2
    console.log(chalk.yellow.bold(`Your monthly taxable salary is Rs. ${monthlySalary} and monthly tax is Rs. ${taxSalary2.toFixed(2)} and Your Net Salary Is Rs.${netSalary2}`))

}else if (yearlySalary > annualIncome1){
    let taxSalary1 = (yearlySalary-annualIncome1)*taxRate1
let netSalary1 = monthlySalary - taxSalary1
    console.log(chalk.yellow.bold(`Your monthly taxable salary is Rs. ${monthlySalary} and monthly tax is Rs. ${taxSalary1.toFixed(2)} and Your Net Salary Is Rs.${netSalary1}`))
}else {
    console.log(chalk.bgRed("You Are Not Applicable For Tax"))
}
let exit = await inquirer.prompt({

    type: "confirm",
    name: "exit",
    message: chalk.magenta.bold(`For Exit Please Enter "No",For Resume Enter "Y"`),
    default: false,
});
condition = exit.exit;
}
