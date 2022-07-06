# Royal_Palace_Weather



Royal Weather is a web application made for the royal palace in Stockholm. It shows current, hourly and even daily forecasts. You can even bookmark days to see them later.



# Setup



1.  ### Open Git Bash

    If Git is not already installed, it is super simple. Just click on this [link](https://git-scm.com/downloads) and follow the instructions.

    

2.  ### Go to the current directory where you want the cloned directory to be added.

    Go to the directory you want to setup the project on and open git bash terminal

    

3.  ### Use the git clone command along with the repository url



```

 $ git clone https://github.com/asili2001/Royal_Palace_Weather.git

```



#### Returning 



```

Cloning into Git …

remote: Counting objects: 13, done.

remote: Compressing objects: 100% (13/13), done.

remove: Total 13 (delta 1), reused 0 (delta 1)

Unpacking objects: 100% (13/13), done.

```



4.  ### install Redis

    The open source, in-memory data store is used by millions of developers as a database, cache, streaming engine, and message broker.

    

    It´s realy easy to set up Redis, just follow the steps in [here](https://redis.io/docs/getting-started/)

    

5.  ### Start Redis server by running `redis-server` in OS terminal.



6.  ### Open the project with visual studio code and install the dependencies on both backend and frontend

    in visual studio, click on the terminal button and open a new terminal.

    

    ![alt text](https://user-images.githubusercontent.com/91294361/177550742-e59eb3df-e8c5-44fd-ac63-24895e78fba7.png "Logo Title Text 1")

    

    Type `cd backend` to go to the backend directory and then type `npm i ` to install all the dependencies.
    
    In the backend directory, create a .env file. copy and paste the configurations below : 
    
    ```
      SERVER_PORT = 1337



      # App configuration
      OPEN_WEATHER_API_KEY = ''
      GEOAPIFY_API_KEY = 'd548c5ed24604be6a9dd0d989631f783'

      OPEN_WEATHER_UNITS = 'metric'



      #Redis configuration
      REDIS_CONNECTION_STRING = 'redis://127.0.0.1:6379'


      CACHE_DAILY_EXPIRATION = 36000

      CACHE_HOURLY_EXPIRATION = 36000

      CACHE_ALERT_EXPIRATION = 36000

      CACHE_CURRENT_EXPIRATION = 6000

      MAX_REQ_PER_IP = 5

      CACHE_EXPTIME_BETWEEN_REQESTS = 5000

    ```
    The openweathermap api key can you get by signing up. follow the [link](https://openweathermap.org/)

    Type `cd ../royal-weather` to go back to the frontend directory and then type `npm i` to install all the dependencies.
    
    

    

    

    Enjoy...
