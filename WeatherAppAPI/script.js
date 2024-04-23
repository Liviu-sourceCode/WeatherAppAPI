// Defineste funcția pentru a obtine datele meteo pentru orasul introdus
async function getWeather() {
    try {
        const city = document.getElementById('cityInput').value;
        
        // Ascunde campul de informatii meteo initial
        document.getElementById('weatherInfo').style.display = 'none';
        
        // Verifica dacă orasul a fost introdus
        if (city.trim() !== '') {
            // Daca orasul a fost introdus, afiseaza campul de informatii meteo
            document.getElementById('weatherInfo').style.display = 'block';
            
            // Apel pentru a obtine datele meteo folosind protocolul HTTP
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=your_api_key&units=metric`);
            const data = await response.json();

            // Verifica daca orasul a fost gasit
            if (data.cod === "404") {
                // Afiseaza un mesaj de atentionare daca orasul nu a fost gasit
                alert("City not found. Please enter a valid city name.");
                return;
            }

            // Afiseaza datele pe interfata
            document.querySelector('.location').textContent = data.name;
            document.querySelector('.temperature').innerHTML = `${data.main.temp}&deg;C`;
            document.querySelector('.description').textContent = data.weather[0].description;
            document.querySelector('.humidity').textContent = `Humidity: ${data.main.humidity}%`;
            document.querySelector('.pressure').textContent = `Pressure: ${data.main.pressure} hPa`;
            document.querySelector('.wind').textContent = `Wind: ${data.wind.speed} m/s`;
           
        } else {
            // Daca orasul nu a fost introdus, afiseaza un mesaj de eroare
            alert('Please enter a city name.');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}


