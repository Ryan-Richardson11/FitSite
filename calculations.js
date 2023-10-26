
function BMI(weight, height) {

    if (isNaN(weight) || isNaN(height)) {
        console.log("Please enter valid numbers for weight and height.");
        return;
    }
    var BMI = 703 * (weight / (height ** 2));
    return window.location.href = "bmi.html?bmi=" + BMI.toFixed(1);
}

function caloricIntake() {

}

function macros() {

}
