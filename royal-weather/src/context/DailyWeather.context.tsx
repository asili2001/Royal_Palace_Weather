import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import weatherApi from "../api/weather.api";
import { DailyWeather } from "../model";
import LoadingContext from "./Loading.context";

interface Props {
    dailyWeather: DailyWeather[],
}

const DailyWeatherContext = createContext<Props>(null as any);


export const DailyWeatherProvider = ({children}:{children : ReactNode}) => {
    const [dailyWeather, setDailyWeather] = useState<DailyWeather[]>([]);
    const {startLoading, endLoading } = useContext(LoadingContext);
    
    useEffect(() => {
        getDailyWeather();

        setInterval(()=>{
            getDailyWeather()
        }, 600000);
        
    }, []);

    const getDailyWeather = async () => {
        try {
            startLoading();
            const response = await weatherApi.get(`/daily/lon/${import.meta.env.VITE_LON}/lat/${import.meta.env.VITE_LAT}`);
            setDailyWeather(response.data);
            endLoading();

        } catch (error) {
            console.error(error);
            return;
        }
    }

    return (
        <DailyWeatherContext.Provider value={{dailyWeather}}>
            {children}
        </DailyWeatherContext.Provider>
    )
}

export default DailyWeatherContext;