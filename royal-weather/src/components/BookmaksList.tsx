import { useContext, useEffect, useState } from 'react';

import BookmarkContext from '../context/Bookmark.context';
import useWeatherSymbol from '../hooks/useWeatherSymbol';
import { DailyWeather } from '../model';

import WeatherCard from './WeatherCard';

const BookmarksList = () => {
    const { activeBookmarks } = useContext(BookmarkContext);
    const [bookmarks, setBookmarks] = useState<DailyWeather[]>([]);
    const days:string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months:string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const bgGetter = (id:number) => {
      const bg = useWeatherSymbol(id);
      return bg.bg;
    }

    useEffect(()=>{
      setBookmarks(activeBookmarks);
    }, [activeBookmarks])


  return (
    <div className="forecast-list">
      <h1>My Bookmarks</h1>
      <div className="forecasts-container">
        
                {
                  bookmarks.length > 0 ?
                bookmarks && bookmarks?.map((day, index) => {
                  const dateTime = new Date(day.date * 1000);
        
                  return <WeatherCard key={index} data={{title : days[dateTime.getDay()], date : `${dateTime.getDate()} ${months[dateTime.getMonth()]}`, hTemp : Math.round(day.maxTemp), lTemp: Math.round(day.minTemp), bg : bgGetter(day.weather), size : "big" , type : "day", unixTimeStamp : day.date}}/>
                }) :
                <div className="no-bookmarks">
                  <h2>You have no bookmarks</h2>
                  <p>Click on the bookmark button to add a bookmark</p>
                </div>
              }

            
      </div>
    </div>
  );
}

export default BookmarksList;