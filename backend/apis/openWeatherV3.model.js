import axios from "axios";
import dotEnv from 'dotenv';
dotEnv.config('./')

const openWeather = axios.create({
    baseURL: `https://api.openweathermap.org/data/3.0`,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    params: {
        appid : process.env.OPEN_WEATHER_API_KEY,
        units: process.env.OPEN_WEATHER_UNITS
    },
    
});

export default openWeather;