import Redis from 'ioredis';

export const Cache = (req, res, next)=>{
    const paths = req.path.split('/');
    const {lon, lat} = req.params;

    const redisClient = new Redis({
        url: process.env.REDIS_URL, 
        legacyMode: true 
    })

    const cacheKey = `${paths[1]}_${lon}-${lat}`;
    redisClient.on('error', (err) => console.log('Redis Client Error', err));

    redisClient.get(cacheKey, (err, data)=>{
        if(err) throw err;

        if(data !== null){
            res.status(200).json(JSON.parse(data));
        }else{
            next();
        }
    })
}