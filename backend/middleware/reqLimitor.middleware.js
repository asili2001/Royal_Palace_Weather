import Redis from "ioredis";

export const reqLimitor = (req, res, next) => {
    let ips = [];

    const redisClient = new Redis({
        url: process.env.REDIS_URL, 
        legacyMode: true 
    })

    redisClient.get('ips', (err, data)=>{
        if(err) throw err;

            if(data !== null){
                ips = JSON.parse(data);


                const index = JSON.parse(data).findIndex(user => user.ip === req.ip);
                if (index !== -1) {

                    console.log((ips[index].firstRequest + parseInt(process.env.CACHE_EXPTIME_BETWEEN_REQESTS)) - Date.now());

                    if((ips[index].firstRequest + parseInt(process.env.CACHE_EXPTIME_BETWEEN_REQESTS)) - Date.now() > 1){

                        if(ips[index].ipRequests < 1){
                            res.status(429).json({
                                ErrMessage: "Too Many Requests"
                            });
                        }else{

                            ips[index].ipRequests -= 1;
                            redisClient.set('ips', JSON.stringify(ips));
                            next();
                        }

                    }else{
                        ips[index].ipRequests =  parseInt(process.env.MAX_REQ_PER_IP);
                        ips[index].firstRequest = Date.now();

                        console.log(ips[index]);

                        redisClient.set('ips', JSON.stringify(ips));
                        next();
                    }

                }
            }else{
                ips.push(
                    {
                        ip: req.ip,
                        ipRequests: process.env.MAX_REQ_PER_IP,
                        firstRequest: Date.now(),
                    }
                )
                redisClient.set('ips', JSON.stringify(ips));
                next();
            }
    })


}
