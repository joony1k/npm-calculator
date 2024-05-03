#! /Usr/bin/env node
import inquirer from "inquirer";
const questions = await inquirer.prompt([
    {
        type: "number",
        name: "numberone",
        message: "Enter your  first number"
    },
    {
        type: "number",
        name: "numbertwo",
        message: "Enter your  second number"
    },
    {
        type: "list",
        name: "operater",
        message: "Enter your operator",
        choices: ["+", "-", "*", "/", "%"]
    }
]);
const { numberone, numbertwo, operater } = questions;
let result;
switch (operater) {
    case "+":
        result = numberone + numbertwo;
        break;
    case "-":
        result = numberone - numbertwo;
        break;
    case "*":
        result = numberone * numbertwo;
        break;
    case "/":
        result = numberone / numbertwo;
        break;
    case "%":
        result = numberone % numbertwo;
        break;
    default:
        console.log("Invalid operator");
        break;
}
;
console.log(`${numberone} ${operater} ${numbertwo} ${result}`);
