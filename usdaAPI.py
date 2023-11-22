import requests


def get_forecast(office, gridX, gridY):
    # Construct the API URL for the given latitude and longitude
    url = f'https://api.weather.gov/gridpoints/{office}/{gridX},{gridY}/forecast'

    # Send a GET request to the API URL
    response = requests.get(url)
    # If the response is successful, extract the forecast data
    if response.ok:
        forecast = str(response.json()['properties']
                       ['periods'][0]['temperature'])
        forecast += "F " + \
            str(response.json()['properties']
                ['periods'][0]['temperatureTrend'])
        forecast += " - " + \
            str(response.json()['properties']['periods'][0]['shortForecast'])
        return forecast

    # If the response is not successful, print out failure.
    else:
        print('Failed to fetch forecast.')


while True:
    # Calls get_destination given the latitude and longitude
    location = get_destination()
    if location is not None:
        # Inputs the values returned into get_forcast and returns the forcast for that location if available.
        forecast = get_forecast(location[0], location[1], location[2])
        print(forecast)
    else:
        print('There is no forcast data for that location.')