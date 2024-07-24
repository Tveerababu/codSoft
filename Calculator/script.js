const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const operators = ["+", "-", "*", "/", "%", "="];
let output = "";

const calculate = (buttonValue) => {
    if (buttonValue === "=" && output !== "") {
        try{
        output = eval(output.replace("%", "/100"));     // Replacing the operation of %
        }
        catch(e){
            output = "Error";   //Error Message 
        }
    } else if (buttonValue === "AC") {
        output = "";    // All clear
    } else if (buttonValue === "DEL") {
        output = output.toString().slice(0, -1);    // Deleting single character 
    } else {
        if (output === "" && operators.includes(buttonValue)) 
            return;
        output += buttonValue;   // Displaying the numbers and operators
    }
    display.value = output;
};

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});