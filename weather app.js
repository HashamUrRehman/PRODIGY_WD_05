const myHeaders = new Headers();
myHeaders.append("x-apihub-key", "YOUR_API_KEY"); // Replace with your API key
myHeaders.append("x-apihub-host", "Weather-forecast-API.allthingsdev.co");
myHeaders.append("x-apihub-endpoint", "300b2443-e2a7-4258-84ac-8fa0c4cf7af5");

// A mapping of city names to their corresponding latitude and longitude
const cityCoordinates = {
    Islamabad: { latitude: 33.6844, longitude: 73.0479 },
    Karachi: { latitude: 24.8607, longitude: 67.0011 },
    Lahore: { latitude: 31.5497, longitude: 74.3436 },
    Peshawar: { latitude: 34.0151, longitude: 71.5249 },
    Quetta: { latitude: 30.1798, longitude: 66.9750 },
    Multan: { latitude: 30.1575, longitude: 71.5249 },
    Faisalabad: { latitude: 31.4184, longitude: 74.1004 },
    Rawalpindi: { latitude: 33.6007, longitude: 72.6787 },
    Gujranwala: { latitude: 32.1613, longitude: 74.1880 },
    Sialkot: { latitude: 32.5011, longitude: 74.5232 },
    Bahawalpur: { latitude: 29.3575, longitude: 71.6833 },
    Abbottabad: { latitude: 34.1516, longitude: 73.2184 },
    Larkana: { latitude: 27.5584, longitude: 68.2140 },
    Sukkur: { latitude: 27.7017, longitude: 68.8578 },
    Jhelum: { latitude: 32.9355, longitude: 73.7278 },
    Dera: { latitude: 30.0453, longitude: 70.6340 },
    Mardan: { latitude: 34.1982, longitude: 72.0340 },
    Mirpur: { latitude: 33.4688, longitude: 73.7283 },
    Tando: { latitude: 25.4755, longitude: 68.2784 },
    Hyderabad: { latitude: 25.3960, longitude: 68.3618 },
    Chiniot: { latitude: 31.6792, longitude: 73.8258 },
    Sheikhupura: { latitude: 31.7132, longitude: 73.9783 },
    Kasur: { latitude: 31.4062, longitude: 74.0901 },
    Kohat: { latitude: 33.5846, longitude: 71.4330 },
    Jhang: { latitude: 31.2736, longitude: 72.6746 },
    Narowal: { latitude: 32.3151, longitude: 75.0781 },
    Khushab: { latitude: 32.4360, longitude: 72.4040 },
};

function fetchWeather(city) {
    const coordinates = cityCoordinates[city];
    if (!coordinates) {
        console.error('City not found in the database.');
        return;
    }

    const { latitude, longitude } = coordinates;

    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };

    // Modify the API URL to include dynamic latitude and longitude
    const apiUrl = `https://Weather-forecast-API.proxy-production.allthingsdev.co/v1/forecast?latitude=${latitude}&longitude=${longitude}&elevation=1603&hourly=dew_point_2m&daily=weather_code&current=temperature_2m&minutely_15=dew_point_2m&temperature_unit=celsius&wind_speed_unit=kmh&precipitation_unit=mm&timeformat=iso8601&timezone=GMT&past_days=0&past_hours=0&past_minutely_15=0&forecast_days=0&forecast_hours=0&forecast_minutely_15=0&tilt=30&azimuth=45&start_date=2024-08-08&end_date=2024-08-11&start_hour=2024-08-08T12:00&end_hour=2024-08-08T12:00&start_minutely_15=2024-08-08T12:00&end_minutely_15=2024-08-08T12:15&models=best_match&cell_selection=land`;

    fetch(apiUrl, requestOptions)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((result) => {
            console.log(result);
            // Here you can add code to display the weather data in your app
        })
        .catch((error) => console.error('Fetch error:', error));
}

// Example usage:
fetchWeather('Islamabad'); // Replace with any city from the cityCoordinates
