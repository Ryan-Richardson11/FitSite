
function BMI(weight, height) {
    var BMI = 703 * (weight / (height ** 2));
    return BMI
}

function caloricIntake(gender, weight, height, age, activityLevel) {
    weight = (weight / 2.2);
    height = (height * 2.54);

    if (gender == "male") {
        var RMR = (9.99 * weight) + (6.25 * height) - (4.92 * age) + 5;
        if (activityLevel = "Sedentary") {
            return RMR;
        }
        else if (activityLevel = "Low Active") {
            return RMR *= 1.11
        }
        else if (activityLevel = "Active") {
            return RMR *= 1.25
        }
        else if (activityLevel = "Very Active") {
            return RMR *= 1.48
        }
    }
    else if (gender == "female") {
        var RMR = (9.99 * weight) + (6.25 * height) - (4.92 * age) - 161;
        if (activityLevel = "Sedentary") {
            return RMR;
        }
        else if (activityLevel = "Low Active") {
            return RMR *= 1.12
        }
        else if (activityLevel = "Active") {
            return RMR *= 1.27
        }
        else if (activityLevel = "Very Active") {
            return RMR *= 1.45
        }
    }

}

function macros() {

}

function contact() {
    return "<p>Name: Ryan Richardson</p><p>Email: Ryanrich811@gmail.com</p><p><a href='https://www.linkedin.com/in/ryan-richardson-4b3b9a265/'>LinkedIn</a></p><p><a href='https://github.com/Ryan-Richardson11'>GitHub</a></p>"
}
