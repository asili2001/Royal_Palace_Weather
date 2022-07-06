import { createContext, useContext, useEffect, useState } from "react";
import weatherApi from "../api/weatherApi";

const HourlyWeatherContext = createContext();

export const HourlyWeatherProvider = ({children}) => {
    const [hourlyWeather, setHourlyWeather] = useState(null);

    useEffect(() => {
        getHourlyWeather();

        setInterval(()=>{
            getHourlyWeather()
        }, 600000);
    }, []);

    const getHourlyWeather = async () => {
        try {

            const response = await weatherApi.get(`/hourly/lon/${import.meta.env.VITE_LON}/lat/${import.meta.env.VITE_LAT}`);
            setHourlyWeather(response.data);

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <HourlyWeatherContext.Provider value={{hourlyWeather}}>
            {children}
        </HourlyWeatherContext.Provider>
    )
}

export default HourlyWeatherContext;