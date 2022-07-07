import { useContext, useEffect } from 'react';
import CurrentWeatherContext from '../context/CurrentWeather.context';
import useWeatherSymbol from '../hooks/useWeatherSymbol';
import SunRise from '../assets/symbols/sunrise.png';
import SunSet from '../assets/symbols/sunset.png';


import SunnySymbol from './symbols/Sunny.symbol';
import PartlySunnySymbol from './symbols/PartlySunny.symbol';
import CloudySymbol from './symbols/Cloudy.symbol';
import LowRainSymbol from './symbols/LowRain.symbol';
import HeighRainSymbol from './symbols/HeighRain.symbol';
import ThunderSymbol from './symbols/Thunder.symbol';
import SnowSymbol from './symbols/Snow.symbol';
import AtmosphereSymbol from './symbols/Atmosphere.symbol';

import LoadingContext from '../context/Loading.context';

const WeatherPanel = () =>{
    const { currentWeather } = useContext(CurrentWeatherContext);
    const weatherSymbol = useWeatherSymbol(currentWeather?.weather);

    const { loading, loadingStart, loadingStop } = useContext(LoadingContext);


    const sunrise = new Date(currentWeather?.sunrise * 1000);
    const sunset = new Date(currentWeather?.sunset * 1000);



    const renderSymbolComponent = () => {
        switch(weatherSymbol.symbol) {
            case "SunnySymbol":
                return <SunnySymbol />;
            case "PartlySunnySymbol":
                return <PartlySunnySymbol />;
            case "CloudySymbol":
                return <CloudySymbol />;
            case "LowRainSymbol":
                return <LowRainSymbol />;
            case "HeighRainSymbol":
                return <HeighRainSymbol />;
            case "ThunderSymbol":
                return <ThunderSymbol />;
            case "SnowSymbol":
                return <SnowSymbol />;
            case "AtmosphereSymbol":
                return <AtmosphereSymbol />;
            default:
                return <SunnySymbol />;
        }
    }
    return(
        <div className="weather">
            {/* Wheather Overview */}
            <div>
                {
                    renderSymbolComponent()
                }
                <h2>{currentWeather?.weatherDescription}</h2>
            </div>


            {/* Weather Details */}
            <div>
                <div className="temp">
                    <h2>{Math.round(currentWeather?.temp)}°</h2>
                </div>
                <div className="sun-pos">
                    <div className="sunrise">
                        <img src={SunRise} alt="" />
                        <h2>{sunrise.getHours()}:{sunrise.getMinutes()}</h2>
                    </div>
                    <div className="sunset">
                        <img src={SunSet} alt="" />
                        <h2>{sunset.getHours()}:{sunset.getMinutes()}</h2>
                    </div>
                </div>
            </div>

            {/* Lowest and Heighest Temprature */}
            <div>
                <p>{Math.round(currentWeather?.minTemp)}°</p>
                <div></div>
                <p>{Math.round(currentWeather?.maxTemp)}°</p>
            </div>
        </div>
    )
}

export default WeatherPanel;