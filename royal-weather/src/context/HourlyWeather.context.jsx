import { createContext, useContext, useEffect, useState } from "react";
import weatherApi from "../api/weatherApi";
import LoadingContext from "./Loading.context";

const HourlyWeatherContext = createContext();

export const HourlyWeatherProvider = ({children}) => {
    const { loading, loadingStart, loadingStop } = useContext(LoadingContext);
    const [hourlyWeather, setHourlyWeather] = useState(null);

    useEffect(() => {
        getHourlyWeather();

        setInterval(()=>{
            getHourlyWeather()
        }, 600000);
    }, []);

    const getHourlyWeather = async () => {
        try {
            loadingStart();
            const response = await weatherApi.get(`/hourly/lon/${import.meta.env.VITE_LON}/lat/${import.meta.env.VITE_LAT}`);
            setHourlyWeather(response.data);
            loadingStop();

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