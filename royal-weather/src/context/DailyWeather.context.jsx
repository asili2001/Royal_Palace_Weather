import { createContext, useContext, useEffect, useState } from "react";
import weatherApi from "../api/weatherApi";
import LoadingContext from "./Loading.context";

const DailyWeatherContext = createContext();


export const DailyWeatherProvider = ({children}) => {
    const [dailyWeather, setDailyWeather] = useState(null);
    const { loading, loadingStart, loadingStop } = useContext(LoadingContext);
    
    useEffect(() => {
        getDailyWeather();
        setInterval(()=>{
            getDailyWeather()
        }, 600000);
    }, []);

    const getDailyWeather = async () => {
        try {
            loadingStart();
            const response = await weatherApi.get(`/daily/lon/${import.meta.env.VITE_LON}/lat/${import.meta.env.VITE_LAT}`);
            setDailyWeather(response.data);
            loadingStop();

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