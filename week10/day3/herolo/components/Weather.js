import React, { useState, useEffect } from 'react';
import { getAutoComplete, getCurrentWeather, get5DayForecast } from '../services/api';

const Weather = () => {
    // state variables
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState('');
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [favorites, setFavorites] = useState([]);

    // effect to load default city
    useEffect(() => {
        searchCity('Tel Aviv');
    }, []);

    // handling city search
    const searchCity = async (query) => {
        try {
            const results = await getAutoComplete(query);
            setSearchResults(results);
        }   catch (error) {
            console.error('Error searching for city:', error);
        }
    };

    // handling selecting a loc
    const selectLocation = async (location) => {
        try {
            const currentWeather = await getCurrentWeather(location.Key);
            const forecast = await get5DayForecast(location.Key);

            setSelectedLocation({
                ...location,
                currentWeather: currentWeather[0],
                forecast,
            });
        }   catch (error) {
            console.error('Error getting weather details:', error);
        }
    };

    return (
        <div className="weather">
          {/* Search input */}
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for a city..."
          />
          
          {/* Display search results */}
          <ul>
            {searchResults.map((result) => (
              <li key={result.Key} onClick={() => selectLocation(result)}>
                {result.LocalizedName}, {result.Country.LocalizedName}
              </li>
            ))}
          </ul>
    
          {/* Display weather details */}
          {selectedLocation && (
            <div>
              <h2>{selectedLocation.LocalizedName}, {selectedLocation.Country.LocalizedName}</h2>
              {/* Display current weather */}
              <div>
                <h3>Current Weather</h3>
                {/* Display current weather details */}
                <p>{selectedLocation.currentWeather.WeatherText}</p>
                {/* Display additional current weather details */}
                <p>{selectedLocation.currentWeather.Temperature.Metric.Value}°C</p>
                {/* Button to add/remove from favorites */}
                <button>Add to Favorites</button>
              </div>
    
              {/* Display 5-day forecast */}
              <div>
                <h3>5-Day Forecast</h3>
                {/* Display forecast details */}
                {selectedLocation.forecast.map((day) => (
                  <div key={day.Date}>{day.Temperature.Maximum.Value}°C</div>
                ))}
              </div>
            </div>
          )}
        </div>
      );
    };
    
export default Weather;