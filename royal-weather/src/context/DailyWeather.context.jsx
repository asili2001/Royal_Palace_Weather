import { createContext, useContext, useEffect, useState } from "react";
import weatherApi from "../api/weatherApi";

const DailyWeatherContext = createContext();


export const DailyWeatherProvider = ({children}) => {
    const [dailyWeather, setDailyWeather] = useState(null);
    
    useEffect(() => {
        getDailyWeather();
        setInterval(()=>{
            getDailyWeather()
        }, 600000);
    }, []);

    const getDailyWeather = async () => {
        try {
            const response = await weatherApi.get(`/daily/lon/${import.meta.env.VITE_LON}/lat/${import.meta.env.VITE_LAT}`);
            setDailyWeather(response.data);

        } catch (error) {
            console.error(error);
            return;
        }
    }

    const checkIfExists = (date) => {
        //return dailyWeather.some((item) => item.date === date);
        console.log(dailyWeather);
    }

    return (
        <DailyWeatherContext.Provider value={{dailyWeather, checkIfExists}}>
            {children}
        </DailyWeatherContext.Provider>
    )
}

export default DailyWeatherContext;