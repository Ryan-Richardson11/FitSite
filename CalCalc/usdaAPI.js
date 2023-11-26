function getFoodInformation() {
    var foodName = document.getElementById("food").value;
    console.log("Searching...")
    // API key Hidden
    fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=&query=${foodName}`)
        .then(response => response.json())
        .then(data => {
            var foodResult = document.getElementById("foodResult");
            foodResult.innerHTML = "";

            if ('foods' in data) {
                var foodsList = data.foods;
                if (foodsList.length > 0) {
                    var foodItem = foodsList[0];
                    var description = foodItem.description;
                    var nutrients = foodItem.foodNutrients;

                    foodResult.innerHTML += `<strong>Nutrition Information for ${description}:</strong><br>`;

                    for (var nutrient of nutrients) {
                        var nutrientName = nutrient.nutrientName;
                        var nutrientValue = nutrient.value;
                        var unitName = nutrient.unitName;

                        var desiredNutrients = [
                            'Serving Size', 'Energy', 'Total lipid (fat)', 'Fatty acids, total saturated',
                            'Fatty acids, total trans', 'Cholesterol', 'Sodium', 'Carbohydrate, by difference',
                            'Fiber, total dietary', 'Sugars, total including NLEA', 'Sugars, added',
                            'Protein', 'Vitamin D (D2 + D3)', 'Calcium, Ca', 'Iron, Fe', 'Potassium, K'
                        ];

                        if (desiredNutrients.includes(nutrientName)) {
                            foodResult.innerHTML += `<b>${nutrientName}:</b> ${nutrientValue} ${unitName}<br>`;
                        }
                    }
                } else {
                    foodResult.innerHTML = `No information found for ${foodName}`;
                }
            } else {
                foodResult.innerHTML = `No information found for ${foodName}`;
            }
        })
        .catch(error => {
            console.error("Error fetching food information:", error);
            document.getElementById("foodResult").innerHTML = "An error occurred while fetching data.";
        });
}