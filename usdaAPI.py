import requests
from config import key


def get_food_information(food):
    url = f'https://api.nal.usda.gov/fdc/v1/foods/search?api_key={key}&query={food}'
    response = requests.get(url)

    try:
        response = requests.get(url)
        response.raise_for_status()  # Raise an HTTPError for bad responses
        data = response.json()

        if 'foods' in data:
            foods_list = data['foods']
            if foods_list:
                # Only consider the first result
                food_item = foods_list[0]
                description = food_item.get('description', '')
                nutrients = food_item.get('foodNutrients', [])

                print(f"\nNutrition Information for {description}:")

                for nutrient in nutrients:
                    nutrient_name = nutrient.get('nutrientName', '')
                    nutrient_value = nutrient.get('value', 0)
                    unit_name = nutrient.get('unitName', '')

                    # List of desired nutrients
                    desired_nutrients = [
                        'Serving Size', 'Energy', 'Total lipid (fat)', 'Fatty acids, total saturated',
                        'Fatty acids, total trans', 'Cholesterol', 'Sodium', 'Carbohydrate, by difference',
                        'Fiber, total dietary', 'Sugars, total including NLEA', 'Sugars, added',
                        'Protein', 'Vitamin D (D2 + D3)', 'Calcium, Ca', 'Iron, Fe', 'Potassium, K'
                    ]

                    if nutrient_name in desired_nutrients:
                        print(f"{nutrient_name}: {nutrient_value} {unit_name}")

            else:
                print(f"No information found for {food}")

        else:
            print(f"No information found for {food}")

    except requests.exceptions.HTTPError as errh:
        print(f"HTTP Error: {errh}")
    except requests.exceptions.RequestException as err:
        print(f"Request Exception: {err}")

get_food_information("Bread")
get_food_information("Potato Bread")

# def display_food_information(data):
    
# while True:
#     # Calls get_destination given the latitude and longitude
#     location = get_destination()
#     if location is not None:
#         # Inputs the values returned into get_forcast and returns the forcast for that location if available.
#         forecast = get_forecast(location[0], location[1], location[2])
#         print(forecast)
#     else:
#         print('There is no forcast data for that location.')