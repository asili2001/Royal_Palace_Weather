import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import weatherApi from "../api/weather.api";
import { HourlyWeather } from "../model";
import LoadingContext from "./Loading.context";

interface Props {
    hourlyWeather: HourlyWeather[],
}

const HourlyWeatherContext = createContext<Props>(null as any);

export const HourlyWeatherProvider = ({children}: {children : ReactNode}) => {
    const {startLoading, endLoading } = useContext(LoadingContext);
    const [hourlyWeather, setHourlyWeather] = useState<HourlyWeather[]>([]);

    useEffect(() => {
        getHourlyWeather();

        setInterval(()=>{
            getHourlyWeather()
        }, 600000);
    }, []);

    const getHourlyWeather = async () => {
        try {
            startLoading();
            const response = await weatherApi.get(`/hourly/lon/${import.meta.env.VITE_LON}/lat/${import.meta.env.VITE_LAT}`);
            setHourlyWeather(response.data);
            
            endLoading();

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