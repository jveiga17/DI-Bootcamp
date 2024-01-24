import axios from "axios";

const API_KEY = '2HRJKRW1UGzGioiF47hVUD4fQovdX5KC';
const BASE_URL = 'http://dataservice.accuweather.com';

const api = axios.create({
    baseURL: BASE_URL,
  });
  
  // accuweather api endpoints
  export const getAutoComplete = async (query) => {
    const response = await api.get(`/locations/v1/cities/autocomplete`, {
      params: {
        apiKey: API_KEY,
        q: query,
      },
    });
    return response.data;
  };
  
  export const getCurrentWeather = async (locationKey) => {
    const response = await api.get(`/currentconditions/v1/${locationKey}`, {
      params: {
        apiKey: API_KEY,
      },
    });
    return response.data;
  };
  
  export const get5DayForecast = async (locationKey) => {
    const response = await api.get(`/forecasts/v1/daily/5day/${locationKey}`, {
      params: {
        apiKey: API_KEY,
      },
    });
    return response.data.DailyForecasts;
  };
  
  export default api;
