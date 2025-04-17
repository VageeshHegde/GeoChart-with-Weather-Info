// Capital mapping (extend as needed)
const capitalMap = {
  "Afghanistan": "Kabul",
  "Albania": "Tirana",
  "Algeria": "Algiers",
  "Andorra": "Andorra la Vella",
  "Angola": "Luanda",
  "Antigua and Barbuda": "Saint John's",
  "Argentina": "Buenos Aires",
  "Armenia": "Yerevan",
  "Australia": "Canberra",
  "Austria": "Vienna",
  "Azerbaijan": "Baku",
  "Bahamas": "Nassau",
  "Bahrain": "Manama",
  "Bangladesh": "Dhaka",
  "Barbados": "Bridgetown",
  "Belarus": "Minsk",
  "Belgium": "Brussels",
  "Belize": "Belmopan",
  "Benin": "Porto-Novo",
  "Bhutan": "Thimphu",
  "Bolivia": "Sucre",
  "Bosnia and Herzegovina": "Sarajevo",
  "Botswana": "Gaborone",
  "Brazil": "Brasília",
  "Brunei": "Bandar Seri Begawan",
  "Bulgaria": "Sofia",
  "Burkina Faso": "Ouagadougou",
  "Burundi": "Gitega",
  "Cabo Verde": "Praia",
  "Cambodia": "Phnom Penh",
  "Cameroon": "Yaoundé",
  "Canada": "Ottawa",
  "Central African Republic": "Bangui",
  "Chad": "N'Djamena",
  "Chile": "Santiago",
  "China": "Beijing",
  "Colombia": "Bogotá",
  "Comoros": "Moroni",
  "Congo (Congo-Brazzaville)": "Brazzaville",
  "Costa Rica": "San José",
  "Croatia": "Zagreb",
  "Cuba": "Havana",
  "Cyprus": "Nicosia",
  "Czech Republic": "Prague",
  "Democratic Republic of the Congo": "Kinshasa",
  "Denmark": "Copenhagen",
  "Djibouti": "Djibouti",
  "Dominica": "Roseau",
  "Dominican Republic": "Santo Domingo",
  "Ecuador": "Quito",
  "Egypt": "Cairo",
  "El Salvador": "San Salvador",
  "Equatorial Guinea": "Malabo",
  "Eritrea": "Asmara",
  "Estonia": "Tallinn",
  "Eswatini": "Mbabane",
  "Ethiopia": "Addis Ababa",
  "Fiji": "Suva",
  "Finland": "Helsinki",
  "France": "Paris",
  "Gabon": "Libreville",
  "Gambia": "Banjul",
  "Georgia": "Tbilisi",
  "Germany": "Berlin",
  "Ghana": "Accra",
  "Greece": "Athens",
  "Grenada": "Saint George's",
  "Guatemala": "Guatemala City",
  "Guinea": "Conakry",
  "Guinea-Bissau": "Bissau",
  "Guyana": "Georgetown",
  "Haiti": "Port-au-Prince",
  "Honduras": "Tegucigalpa",
  "Hungary": "Budapest",
  "Iceland": "Reykjavík",
  "India": "New Delhi",
  "Indonesia": "Jakarta",
  "Iran": "Tehran",
  "Iraq": "Baghdad",
  "Ireland": "Dublin",
  "Israel": "Jerusalem",
  "Italy": "Rome",
  "Jamaica": "Kingston",
  "Japan": "Tokyo",
  "Jordan": "Amman",
  "Kazakhstan": "Astana",
  "Kenya": "Nairobi",
  "Kiribati": "South Tarawa",
  "Kuwait": "Kuwait City",
  "Kyrgyzstan": "Bishkek",
  "Laos": "Vientiane",
  "Latvia": "Riga",
  "Lebanon": "Beirut",
  "Lesotho": "Maseru",
  "Liberia": "Monrovia",
  "Libya": "Tripoli",
  "Liechtenstein": "Vaduz",
  "Lithuania": "Vilnius",
  "Luxembourg": "Luxembourg",
  "Madagascar": "Antananarivo",
  "Malawi": "Lilongwe",
  "Malaysia": "Kuala Lumpur",
  "Maldives": "Malé",
  "Mali": "Bamako",
  "Malta": "Valletta",
  "Marshall Islands": "Majuro",
  "Mauritania": "Nouakchott",
  "Mauritius": "Port Louis",
  "Mexico": "Mexico City",
  "Micronesia": "Palikir",
  "Moldova": "Chișinău",
  "Monaco": "Monaco",
  "Mongolia": "Ulaanbaatar",
  "Montenegro": "Podgorica",
  "Morocco": "Rabat",
  "Mozambique": "Maputo",
  "Myanmar": "Naypyidaw",
  "Namibia": "Windhoek",
  "Nauru": "Yaren",
  "Nepal": "Kathmandu",
  "Netherlands": "Amsterdam",
  "New Zealand": "Wellington",
  "Nicaragua": "Managua",
  "Niger": "Niamey",
  "Nigeria": "Abuja",
  "North Korea": "Pyongyang",
  "North Macedonia": "Skopje",
  "Norway": "Oslo",
  "Oman": "Muscat",
  "Pakistan": "Islamabad",
  "Palau": "Ngerulmud",
  "Palestine": "Ramallah",
  "Panama": "Panama City",
  "Papua New Guinea": "Port Moresby",
  "Paraguay": "Asunción",
  "Peru": "Lima",
  "Philippines": "Manila",
  "Poland": "Warsaw",
  "Portugal": "Lisbon",
  "Qatar": "Doha",
  "Romania": "Bucharest",
  "Russia": "Moscow",
  "Rwanda": "Kigali",
  "Saint Kitts and Nevis": "Basseterre",
  "Saint Lucia": "Castries",
  "Saint Vincent and the Grenadines": "Kingstown",
  "Samoa": "Apia",
  "San Marino": "San Marino",
  "Sao Tome and Principe": "São Tomé",
  "Saudi Arabia": "Riyadh",
  "Senegal": "Dakar",
  "Serbia": "Belgrade",
  "Seychelles": "Victoria",
  "Sierra Leone": "Freetown",
  "Singapore": "Singapore",
  "Slovakia": "Bratislava",
  "Slovenia": "Ljubljana",
  "Solomon Islands": "Honiara",
  "Somalia": "Mogadishu",
  "South Africa": "Pretoria",
  "South Korea": "Seoul",
  "South Sudan": "Juba",
  "Spain": "Madrid",
  "Sri Lanka": "Colombo",
  "Sudan": "Khartoum",
  "Suriname": "Paramaribo",
  "Sweden": "Stockholm",
  "Switzerland": "Bern",
  "Syria": "Damascus",
  "Tajikistan": "Dushanbe",
  "Tanzania": "Dodoma",
  "Thailand": "Bangkok",
  "Timor-Leste": "Dili",
  "Togo": "Lomé",
  "Tonga": "Nukuʻalofa",
  "Trinidad and Tobago": "Port of Spain",
  "Tunisia": "Tunis",
  "Turkey": "Ankara",
  "Turkmenistan": "Ashgabat",
  "Tuvalu": "Funafuti",
  "Uganda": "Kampala",
  "Ukraine": "Kyiv",
  "United Arab Emirates": "Abu Dhabi",
  "United Kingdom": "London",
  "United States": "Washington",
  "Uruguay": "Montevideo",
  "Uzbekistan": "Tashkent",
  "Vanuatu": "Port Vila",
  "Vatican City": "Vatican City",
  "Venezuela": "Caracas",
  "Vietnam": "Hanoi",
  "Yemen": "Sana'a",
  "Zambia": "Lusaka",
  "Zimbabwe": "Harare",
  "Greenland" : "Nuuk",
};
  
  
  const openWeatherApiKey = ""; 
  
  // Fetch weather from OpenWeather API
  async function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${openWeatherApiKey}&units=metric`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.cod !== 200) throw new Error(data.message);
  
      return {
        temperature: `${data.main.temp}°C`,
        weather: data.weather[0].description,
        icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        windSpeed: `${data.wind.speed} m/s`,
        visibility: `${(data.visibility / 1000).toFixed(1)} km`,
        humidity: `${data.main.humidity}%`,
        pressure: `${data.main.pressure} hPa`,
        sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString(),
        sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString()
      };
    } catch (error) {
      console.warn(`Weather fetch failed for ${city}:`, error.message);
      return {
        temperature: "N/A",
        weather: "Unavailable",
        icon: "",
        windSpeed: "N/A",
        visibility: "N/A",
        humidity: "N/A",
        pressure: "N/A",
        sunrise: "N/A",
        sunset: "N/A"
      };
    }
  }
  
  // Fetch combined country + weather info
  async function fetchCountryDetails(country) {
    const capital = capitalMap[country] || "Unknown";
    const weatherData = capital !== "Unknown" ? await fetchWeather(capital) : {
      temperature: "N/A",
      weather: "Unavailable",
      icon: "",
      windSpeed: "N/A",
      visibility: "N/A",
      humidity: "N/A",
      pressure: "N/A",
      sunrise: "N/A",
      sunset: "N/A"
    };
    return {
      country,
      capital,
      ...weatherData
    };
  }
  
  // Fetch all countries
  async function fetchAllCountryDetails() {
    const countries = Object.keys(capitalMap);
    return Promise.all(countries.map(fetchCountryDetails));
  }
  
  // Draw GeoChart
  async function fetchAndUpdateCountryDetails(chart, options) {
    const countryData = await fetchAllCountryDetails();
    const updatedData = [['Country', { type: 'string', role: 'tooltip', p: { html: true } }]];
  
    countryData.forEach(({ country, capital, temperature, weather, icon, windSpeed, visibility, humidity, pressure, sunrise, sunset }) => {
      const tooltipHtml = `
        <div style="padding: 10px; line-height: 1.5; text-align: left; background-color: #fadfa5; border-radius: 8px;">
          <p><strong style="font-size: 16px;">🌍 ${country}</strong> ${icon ? `<img src="${icon}" alt="${weather}" style="width: 24px; vertical-align: middle;">` : ""}</p>
          <p><strong>🏛️ Capital:</strong> ${capital}</p>
          <p><strong>🌡️ Temperature:</strong> ${temperature}</p>
          <p><strong>🌤️ Weather:</strong> ${weather}</p>
          <p><strong>🌬️ Wind speed:</strong> ${windSpeed}</p>
          <p><strong>👁️ Visibility:</strong> ${visibility}</p>
          <p><strong>💧 Humidity:</strong> ${humidity}</p>
          <p><strong>📈 Pressure:</strong> ${pressure}</p>
          <p><strong>🌅 Sunrise:</strong> ${sunrise}</p>
          <p><strong>🌇 Sunset:</strong> ${sunset}</p>
        </div>`;
      updatedData.push([country, tooltipHtml]);
    });
  
    const updatedChartData = google.visualization.arrayToDataTable(updatedData);
    chart.draw(updatedChartData, options);
  }
  
  // Initial render
  function drawRegionsMap() {
    const placeholderData = [['Country', 'Details']];
    Object.keys(capitalMap).forEach(country => placeholderData.push([country, 'Loading...']));
  
    const data = google.visualization.arrayToDataTable(placeholderData);
  
    const options = {
      tooltip: { isHtml: true },
      colorAxis: { colors: ['#f7fbff', '#08306b'] },
      backgroundColor: '#e6fffd',
      datalessRegionColor: '#e0e0e0',
      defaultColor: '#b7ed91'
    };
  
    const chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
    chart.draw(data, options);
  
    fetchAndUpdateCountryDetails(chart, options);
  }
  
  google.charts.load('current', { packages: ['geochart'] });
  google.charts.setOnLoadCallback(drawRegionsMap);

    // ========== Helpers ========== //
    function getWeatherIcon(main) {
        switch (main.toLowerCase()) {
          case "clear":
            return { icon: "fas fa-sun", color: "#f39c12" }; // bright yellow
          case "clouds":
            return { icon: "fas fa-cloud", color: "#95a5a6" }; // gray
          case "rain":
            return { icon: "fas fa-cloud-showers-heavy", color: "#3498db" }; // blue
          case "drizzle":
            return { icon: "fas fa-cloud-rain", color: "#5dade2" }; // lighter blue
          case "thunderstorm":
            return { icon: "fas fa-bolt", color: "#f1c40f" }; // lightning yellow
          case "snow":
            return { icon: "fas fa-snowflake", color: "#85c1e9" }; // light icy blue
          case "mist":
          case "fog":
          case "haze":
            return { icon: "fas fa-smog", color: "#7f8c8d" }; // smoky gray
          default:
            return { icon: "fas fa-cloud-sun", color: "#f4d03f" }; // partly cloudy 🌍
        }
    }   

    let windGauge, windGaugeData;

    // Load Google Charts (run this once in your app)
    google.charts.load('current', { packages: ['gauge'] });
    google.charts.setOnLoadCallback(() => {
      windGaugeData = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['°', 0]
      ]);
  
      const options = {
        width: 250,
        height: 250,
        redFrom: 315, redTo: 360,
        yellowFrom: 225, yellowTo: 315,
        greenFrom: 135, greenTo: 225,
        minorTicks: 10,
        max: 360,
        min: 0
      };
  
      windGauge = new google.visualization.Gauge(document.getElementById('windGauge'));
      windGauge.draw(windGaugeData, options);
    });

    function getWindDirectionWithEmoji(deg) {
      const directions = [
        { dir: "north", emoji: "⬆️" },
        { dir: "northeast", emoji: "↗️" },
        { dir: "east", emoji: "➡️" },
        { dir: "southeast", emoji: "↘️" },
        { dir: "south", emoji: "⬇️" },
        { dir: "southwest", emoji: "↙️" },
        { dir: "west", emoji: "⬅️" },
        { dir: "northwest", emoji: "↖️" }
      ];
    
      // Add 180° to flip the direction to where the wind is going
      const correctedDeg = (deg + 180) % 360;
      const index = Math.round(correctedDeg / 45) % 8;
      //const index = Math.round(deg / 45) % 8;
      return `${directions[index].emoji} ${directions[index].dir}`;
    }    
    
    function updateSVGCompass(deg, cityName) {
      const needle = document.getElementById("needle");
      // const direction = getWindDirectionWithEmoji(deg);
    
      needle.setAttribute("transform", `rotate(${deg}, 100, 100)`);
    
      // document.getElementById("windTitle").textContent = `${cityName} (${deg}° ${direction})`;
      // document.getElementById("windDirText").textContent = `Wind blowing from ${direction}`;
    }

    function speakText(text) {
      const synth = window.speechSynthesis;
      const utter = new SpeechSynthesisUtterance(text);
    
      // More human-like voice settings
      utter.lang = 'en-US';
      utter.pitch = 1;
      utter.rate = 0.9;  // Slower, clearer
      utter.volume = 1;
    
      // Try to use a more natural voice if available
      const voices = synth.getVoices();
      const preferredVoice = voices.find(voice => voice.name.includes('Google') && voice.lang === 'en-US');
      if (preferredVoice) {
        utter.voice = preferredVoice;
      }
    
      synth.cancel(); // Stop previous speech if any
      synth.speak(utter);
    }    
    

    function updateWeatherUI(data) {
        const now = new Date();
        const formatDate = d3.timeFormat("%A, %d %b %Y");
        const formattedDate = formatDate(now);
        // console.log(formattedDate); // ➜ "Thursday, 31 Aug 2025"

        const weatherIconEl = document.getElementById("Icon");
        const { icon, color } = getWeatherIcon(data.weather[0].main);
        weatherIconEl.className = icon;
        weatherIconEl.style.color = color;

        document.getElementById("weatherIcon").innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="${data.weather[0].description}" style="width: 66%;  height: auto; margin: 0;" />`;
        document.getElementById("location").innerText = `${data.name}, ${data.sys.country}`;
        document.getElementById("main").innerText = `${data.weather[0].main} - ${data.weather[0].description}`;
        document.getElementById("temp").innerHTML = `${data.main.temp}°C `;
        document.getElementById("feelsLike").innerText = `${data.main.feels_like}°C`;
        document.getElementById("Sunrise").innerText = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
        document.getElementById("Sunset").innerText = new Date(data.sys.sunset * 1000).toLocaleTimeString();
        document.getElementById("humidity").innerText = `${data.main.humidity}%`;
        document.getElementById("wind").innerText = `${data.wind.speed} m/s`;
        document.getElementById("Pressure").innerText = `${data.main.pressure} hPa`;
        document.getElementById("uv").innerText = `${data.visibility} m`;
        document.getElementById("date").innerText = `${formattedDate}`;
        document.getElementById("humidityTitle").innerHTML = `5-Day Forecast for <strong>${data.name}</strong>`;
        document.getElementById("five").innerHTML = `${data.name}`;

        // 🌍 Add local time of the city
        // Step 1: Get the correct city-local timestamp
        const cityTimeMs = (data.dt + data.timezone) * 1000;

        // Step 2: Create a UTC date object from that timestamp
        const cityTime = new Date(cityTimeMs);

        // Step 3: Format the time using D3
        const formatTime = d3.utcFormat("%I:%M:%S %p");  // Use utcFormat instead of timeFormat
        const formattedCityTime = formatTime(cityTime);

        // Step 4: Display it
        document.getElementById("clock").textContent = `${formattedCityTime}`;   
        
           // 🧭 Update Google Gauge Wind Direction
    if (windGauge && windGaugeData) {
      windGaugeData.setValue(0, 1, data.wind.deg);
      windGauge.draw(windGaugeData, {
        width: 240,
        height: 240,
        redFrom: 315, redTo: 360,
        yellowFrom: 225, yellowTo: 315,
        greenFrom: 135, greenTo: 225,
        minorTicks: 10,
        max: 360,
        min: 0
      });
    }

    const degree = data.wind.deg;
    // const degree = (deg + 180) % 360;
    const dirWithEmoji = getWindDirectionWithEmoji(degree);
    updateSVGCompass(((degree + 180) % 360), data.name);

// Sets: Boston (169° ↘️ SE)
// document.getElementById("windTitle").textContent = `${data.name} (${degree}° ${dirWithEmoji})`;

    document.getElementById("windDirText").textContent = `${(degree + 180) % 360}° Blowing toward the ${dirWithEmoji}`;
    document.getElementById("windTitle").textContent = `${data.name}`;

    const direction = getWindDirectionWithEmoji(data.wind.deg).replace(/⬆️|↗️|➡️|↘️|⬇️|↙️|⬅️|↖️/, '').trim(); // remove emoji for speech

    const speech = `Here's your weather update for ${data.name}, ${data.sys.country}.
    It's currently ${data.main.temp} degrees Celsius with ${data.main.humidity}% humidity.
    The air pressure is ${data.main.pressure} hectopascals, and visibility is around ${data.visibility} meters.
    Winds are blowing toward the ${direction}, at ${data.wind.speed} meters per second.
    The weather is described as ${data.weather[0].description}.`;

    speakText(speech);
    }


    let forecastChart; // Global variable to store the chart instance

async function drawForecastChart(city) {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${openWeatherApiKey}&units=metric`);
  const data = await res.json();

  const filtered = data.list.filter((_, i) => i % 8 === 0).slice(0, 5);

  const labels = filtered.map(item => {
    const date = new Date(item.dt_txt);
    return date.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' });
  });

  const temps = filtered.map(item => item.main.temp);

  const ctx = document.getElementById('tempChart').getContext('2d');

  // ✅ Destroy previous chart if it exists
  if (forecastChart) {
    forecastChart.destroy();
  }

  // ✅ Create new chart
  forecastChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: `5-Day Forecast for ${city}`,
        data: temps,
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: true },
        tooltip: { mode: 'index', intersect: false }
      },
      scales: {
        x: {
          display: true,
          title: { display: true, text: 'Day' }
        },
        y: {
          display: true,
          title: { display: true, text: 'Temperature (°C)' }
        }
      }
    }
  });
}

async function drawHumidityBars(city) {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${openWeatherApiKey}&units=metric`);
  const data = await res.json();

  const filtered = data.list.filter((_, i) => i % 8 === 0).slice(0, 5); // one per day

  const humidityBarsContainer = document.getElementById("humidityBars");
  humidityBarsContainer.innerHTML = ''; // clear previous

  filtered.forEach(item => {
    const date = new Date(item.dt_txt);
    const label = date.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' });
    const humidity = item.main.humidity;

    const barHTML = `
      <div class="mb-4">
        <strong class="mb-1">${label}</strong>
        <div class="progress">
          <div class="progress-bar bg-info" role="progressbar" style="width: ${humidity}%;">
            ${humidity}%
          </div>
        </div>
      </div>
    `;

    humidityBarsContainer.innerHTML += barHTML;
  });
}

      

    // ========== 5-Day Forecast ==========
  async function display5DayForecast(city) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&appid=${openWeatherApiKey}&units=metric`;
  
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (+data.cod !== 200) throw new Error(data.message);
  
      const forecastContainer = document.getElementById("forecast");
      forecastContainer.innerHTML = "";
  
      for (let i = 0; i < data.list.length; i += 8) {
        const forecast = data.list[i];
        const date = new Date(forecast.dt_txt).toDateString();
        const icon = forecast.weather[0].icon;
        const description = forecast.weather[0].description;
  
        forecastContainer.innerHTML += `
          <div class="text-center m-2 p-2 border rounded shadow-sm" style="width: 160px;">
            <p><strong>${date}</strong></p>
            <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}" />
            <p>${description}</p>
          </div>`;
      }
    } catch (err) {
      document.getElementById("forecast").innerHTML = `<p class="text-danger">Unable to fetch forecast.</p>`;
    }
  }

    // ========== Core Weather Fetch ==========
async function fetchWeatherByCoords(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${openWeatherApiKey}&units=metric`;
  
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.cod !== 200) throw new Error(data.message);
  
      updateWeatherUI(data);
      display5DayForecast(data.name);
      drawForecastChart(data.name);
      drawHumidityBars(data.name);
    } catch (err) {
      document.getElementById("geoWeather").innerHTML = `<p class="text-danger">Error: ${err.message}</p>`;
    }
  }
  
  async function fetchWeatherByCity(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${openWeatherApiKey}&units=metric`;
  
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.cod !== 200) throw new Error(data.message);
  
      updateWeatherUI(data);
      display5DayForecast(city);
      drawForecastChart(data.name);
      drawHumidityBars(city);
  
      const ipMessage = document.getElementById("ip");
      if (ipMessage) ipMessage.remove();
    } catch (err) {
      document.getElementById("geoWeather").innerHTML = `<p class="text-danger">Error: ${err.message}</p>`;
    }
  }
  
  // ========== IP Fallback ==========
  async function fetchCoordsFromIP() {
    try {
      const response = await fetch("https://ipapi.co/json/");
      const data = await response.json();
  
      const { latitude, longitude } = data;
      if (!latitude || !longitude) throw new Error("IP location data unavailable");
  
      const ipMessage = document.getElementById("ip");
      // if (ipMessage) ipMessage.innerText = "🌐 Location based on IP. Enable GPS for accurate location details.";
      if (ipMessage) ipMessage.innerText = "🔔 Enable GPS/location access for accurate location details. 🔔";
  
      fetchWeatherByCoords(latitude, longitude);
    } catch (err) {
      console.error("IP fallback error:", err.message);
      document.getElementById("geoWeather").innerHTML = `<p class="text-danger">IP detection failed: ${err.message}</p>`;
    }
  }
  
  // ========== Location Detection ==========
  function loadUserWeather() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => fetchWeatherByCoords(coords.latitude, coords.longitude),
        err => {
          console.warn("GPS error:", err.message);
          fetchCoordsFromIP();
        }
      );
    } else {
      fetchCoordsFromIP();
    }
  }
  
  // ========== City Search ==========
  function handleCitySearch() {
    const input = document.getElementById("cityInput").value.trim();
    if (!input) {
      document.getElementById("searchMessage").textContent = "Please enter a city name.";
      return;
    }
  
    document.getElementById("searchMessage").textContent = "";
    document.getElementById("weatherTitle").innerHTML = `You searched for <strong>${input}</strong> 🌍`;
    fetchWeatherByCity(input);
    drawForecastChart(input);
    drawHumidityBars(input);
    const ipMessage = document.getElementById("ip");
    if (ipMessage) {
      ipMessage.remove();
    }
  }
  
  // ========== Init ==========
  window.onload = loadUserWeather;