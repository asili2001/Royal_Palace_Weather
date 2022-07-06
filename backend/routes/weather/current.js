import openWeather from '../../apis/openWeatherV3.model.js'
import geoApify from '../../apis/geoApify.model.js'
import dotEnv from 'dotenv';
dotEnv.config('./')
import Redis from 'ioredis';

const redisClient = new Redis({
    url: process.env.REDIS_URL, 
    legacyMode: true 
})

redisClient.on('error', (err) => {
    console.error("Redis Error-->", err);
    
});

export const current = async (req, res) => {
    const { lon, lat } = req.params;
    try{
        //get current weather from openWeather
        const response = await openWeather.get(`/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts,flags`);
        const reverseGeocode = await geoApify.get(`/reverse?lat=${lat}&lon=${lon}`);
        const resultData = [];
        
        resultData.push({
            date: response?.data.current.dt,
            timeZone: response?.data.timezone,
            location : `${reverseGeocode?.data.results[0].address_line1}, ${reverseGeocode?.data.results[0].postcode}, ${reverseGeocode?.data.results[0].city}`,
            temp: response?.data.current.temp,
            weather: response?.data.current.weather[0].id,
            weatherDescription: response?.data.current.weather[0].description,
            sunrise: response?.data.current.sunrise,
            sunset: response?.data.current.sunset,
            minTemp: response?.data.daily[0].temp.min,
            maxTemp: response?.data.daily[0].temp.max,
        });


        try{
            //set current weather to redis
            redisClient.setex(`current_${lon}-${lat}`, process.env.CACHE_CURRENT_EXPIRATION, JSON.stringify(resultData));
        }catch(err){
            console.error("Error while setting current weather to redis");
        }
        
          


        res.status(200).json(resultData);


    }catch(err){
        console.log(err);

        res.status(500).json({
            ErrMessage: "Internal Server Error"
        });
    }

}
