import { useEffect, useContext } from "react";
import BookmarkContext from "../context/Bookmark.context";

const useBookMarks = (weatherData) => {
    const {setWeatherData} = useContext(BookmarkContext);

    useEffect(()=>{
            setWeatherData(weatherData);
    }, [weatherData])

}
export default useBookMarks;