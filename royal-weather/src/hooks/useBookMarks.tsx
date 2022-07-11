import { useEffect, useContext } from "react";
import BookmarkContext from "../context/Bookmark.context";
import { DailyWeather } from "../model";

const useBookMarks = (weatherData: DailyWeather[]) => {
    const {setWeatherData} = useContext(BookmarkContext);

    useEffect(()=>{
            setWeatherData(weatherData);
    }, [weatherData])

}
export default useBookMarks;