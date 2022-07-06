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


export const hourly = async (req, res) => {
    const { lon, lat } = req.params;
    try{
        const response = await openWeather.get(`/onecall?lat=${lat}&lon=${lon}&exclude=daily,current,alets,minutely`);
        const resultData = [];

        response && response.data.hourly.map(hour => {
            const time = new Date(hour.dt * 1000);


            //check if the day is already in the array. if not, add it
            if(!resultData.find(day => day.dateDay === time.getDay())){
                resultData.push({
                    date: hour.dt,
                    dateDay: time.getDay(),
                    hours: [{
                        date: hour.dt,
                        time: time.getHours(),
                        weather: hour.weather[0].id,
                        weatherDescription: hour.weather[0].description,
                        temp: hour.temp
                    }]
                });
            }
            //if the day is already in the array, add the hour to the array
            else{
                const index = resultData.findIndex(day => day.dateDay === time.getDay());
                resultData[index].hours.push({
                    date: hour.dt,
                    time: time.getHours(),
                    weather: hour.weather[0].id,
                    weatherDescription: hour.weather[0].description,
                    temp: hour.temp
                });
            }

        });

        try{
            //set hourly weather to redis
            redisClient.setex(`hourly_${lon}-${lat}`, process.env.CACHE_CURRENT_EXPIRATION, JSON.stringify(resultData));
        }catch(err){
            console.error("Error while setting hourly weather to redis");
        }
        return res.status(200).json(resultData);


    }catch(err){
        console.log(err);

        res.status(500).json({
            ErrMessage: "Internal Server Error"
        });
    }

}


