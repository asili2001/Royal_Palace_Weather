import {useContext, useState} from 'react';
import WeatherCard from './WeatherCard';

import DailyWeatherContext from '../context/DailyWeather.context';
import useWeatherSymbol from '../hooks/useWeatherSymbol';

const DailyForecastList = () => {

  const bgGetter = (id:number) => {
    const bg = useWeatherSymbol(id);
    return bg.bg;
  }

  const {dailyWeather} = useContext(DailyWeatherContext);

  const days:string[]    = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months:string[]  = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


  return (
    <div className="forecast-list">
      <h1>Daily Forecast</h1>
      <div className="forecasts-container">

        {dailyWeather && dailyWeather?.map((day, index) => {
          const dateTime = new Date(day.date * 1000);

          return <WeatherCard key={index} data={{title : days[dateTime.getDay()], date : `${dateTime.getDate()} ${months[dateTime.getMonth()]}`, hTemp : Math.round(day.maxTemp), lTemp: Math.round(day.minTemp), bg : bgGetter(day.weather), size : "big" , type : "day", unixTimeStamp : day.date}}/>
        })}
            
      </div>
    </div>
  );
}

export default DailyForecastList;