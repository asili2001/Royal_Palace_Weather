import openWeather from "../../apis/openWeatherV3.model.js";
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

export const daily = async (req, res) => {
    const { lon, lat } = req.params;
    try{
        const response = await openWeather.get(`/onecall?lat=${lat}&lon=${lon}&exclude=hourly,alerts,minutely,current`);
        const resultData = [];

        response && response.data.daily.map(day => {
            resultData.push({
                date: day.dt,
                minTemp: day.temp.min,
                maxTemp: day.temp.max,
                weather: day.weather[0].id,
                weatherDescription: day.weather[0].description,
                sunrise: day.sunrise,
                sunset: day.sunset,
            });
        });

        
        try{
            //set daily weather to redis
            redisClient.setex(`current_${lon}-${lat}`, process.env.CACHE_CURRENT_EXPIRATION, JSON.stringify(resultData));
        }catch(err){
            console.error("Error while setting daily weather to redis");
        }

        res.status(200).json(resultData);


    }catch(err){
        console.log(err);

        res.status(500).json({
            ErrMessage: "Internal Server Error"
        });
    }

}
