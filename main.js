import inquirer from "inquirer";
const BMI = await inquirer.prompt([
    {
        message: "What is Your Weight In KG ?",
        type: "number",
        name: "firstMessage",
    },
    {
        message: "What is your Height in Meters ?",
        type: "Number",
        name: "secondMessage",
    },
]);
console.log("Your BMI is" + " " + BMI.firstMessage / (BMI.secondMessage * BMI.secondMessage));
