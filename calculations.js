
function BMI() {
    var weight = parseFloat(prompt("Enter you weight in lbs: "));
    var height = parseFloat(prompt("Enter your height in inches: "));

    if (isNaN(weight) || isNaN(height)) {
        console.log("Please enter valid numbers for weight and height.");
        return;
    }

    var BMI = 703 * (weight / (height ** 2));
    console.log("Your BMI is " + BMI.toFixed(1));
}

function caloricIntake() {

}

function macros() {

}
