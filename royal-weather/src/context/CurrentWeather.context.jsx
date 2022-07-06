import { createContext, useContext, useEffect, useState } from "react";
import weatherApi from "../api/weatherApi";
import LoadingContext from "./Loading.context";

const CurrentWeatherContext = createContext();


export const CurrentWeatherProvider = ({children}) => {
    const { loading, loadingStart, loadingStop } = useContext(LoadingContext);
    const [currentWeather, setCurrentWeather] = useState(null);
    
    useEffect(() => {
        getCurrentWeather();
        
        setInterval(()=>{
            getCurrentWeather()
        }, 600000);
    }, []);


    const getCurrentWeather = async () => {
        loadingStart();
        try {
            const response = await weatherApi.get(`/current/lon/${import.meta.env.VITE_LON}/lat/${import.meta.env.VITE_LAT}`);
            setCurrentWeather(response.data[0]);
            loadingStop();
            
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <CurrentWeatherContext.Provider value={{currentWeather}}>
            {children}
        </CurrentWeatherContext.Provider>
    )
}

export default CurrentWeatherContext;