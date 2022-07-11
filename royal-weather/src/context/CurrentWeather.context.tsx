import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import weatherApi from "../api/weather.api";
import { CurrentWeather } from "../model";
import LoadingContext from "./Loading.context";

interface Props {
    currentWeather: CurrentWeather,
}

const CurrentWeatherContext = createContext<Props>(undefined as any);

export const CurrentWeatherProvider = ({children} : {children : ReactNode}) => {
    
    const {startLoading, endLoading } = useContext(LoadingContext);
    const [currentWeather, setCurrentWeather] = useState<CurrentWeather>(undefined as any);
    
    useEffect(() => {
        getCurrentWeather();
        
        setInterval(()=>{
            getCurrentWeather()
        }, 600000);
    }, []);


    const getCurrentWeather = async () => {
        startLoading();
        try {
            const response = await weatherApi.get(`/current/lon/${import.meta.env.VITE_LON}/lat/${import.meta.env.VITE_LAT}`);
            setCurrentWeather(response.data[0]);
            endLoading();
            
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