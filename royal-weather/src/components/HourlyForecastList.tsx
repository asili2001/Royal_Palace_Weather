import { useContext, useState } from 'react';
import HourlyWeatherContext from '../context/HourlyWeather.context';
import WeatherCard from './WeatherCard';

import useWeatherSymbol from "../hooks/useWeatherSymbol";


const HourlyForecastList = () => {

  const bgGetter = (id:number) => {
    const bg = useWeatherSymbol(id);
    return bg.bg;
  }

  const days:string[]    = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months:string[]  = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const [selectedDayIndex , setSelectedDayIndex] = useState<number>(0);

  const {hourlyWeather} = useContext(HourlyWeatherContext);
  
  return (
    <div className="forecast-list">
      <h1>Hourly Forecast</h1>
      <ul className="date-picker">
        {
          hourlyWeather !== undefined ? 
          hourlyWeather?.map((hour, index) => {
            return selectedDayIndex === index ? <li key={index} className="active" onClick={()=>setSelectedDayIndex(index)}>{days[hour.dateDay]}</li> : <li key={index} onClick={()=>setSelectedDayIndex(index)}>{days[hour.dateDay]}</li>
          }):
          'loading...'
        }
      </ul>
      <div className="forecasts-container hourly-forecast">
        
        {
          hourlyWeather !== undefined ? 
          hourlyWeather[selectedDayIndex]?.hours.map((hour, index)=>{
            const dateTime = new Date(hour.date * 1000);

            return <WeatherCard key={index} data={{title : `${hour.time}:00`,date : `${dateTime.getDate()} ${months[dateTime.getMonth()]}`, temp: Math.round(hour.temp), bg : bgGetter(hour.weather), size : "small", type : "hour"}}/>
          }):
          'loading...'
        }

            
      </div>
    </div>
  );
}

export default HourlyForecastList;