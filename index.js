import inquirer from "inquirer";
// 1> computer will genrate a random number
// 2> user input for guessing number
// 3> campare user input with computer gaenrated number and show result 
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1 to 10",
    },
]);
// if (agar ye conditiobn  true hai ){run ye wala block}else{nhi to ye wala}
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! you guessed right number");
}
else {
    console.log("you guessed wrong number");
}
