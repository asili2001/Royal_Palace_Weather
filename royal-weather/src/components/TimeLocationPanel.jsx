import { useContext, useEffect, useState } from 'react';
import CurrentWeatherContext from '../context/CurrentWeather.context';
import TimeLocationSymbol from './symbols/TimeLocation.symbol';
import moment from 'moment-timezone';

const TimeLocationPanel = () => {
    const { currentWeather } = useContext(CurrentWeatherContext);
    const [time, setTime] = useState(null);
    moment.tz.setDefault(currentWeather?.timezone);

    useEffect(() => {
        setInterval(()=>{
            setTime(moment().format("HH:mm a"));
        }, 1000);
    }, []);


    return(
        <div className="time-location">
            <TimeLocationSymbol/>

            <div>
                <h1>Local: {time}</h1>
                <address>Kungliga slottet, 107 70 Stockholm</address>
            </div>
        </div>
    )
}

export default TimeLocationPanel;