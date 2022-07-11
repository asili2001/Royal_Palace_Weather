import {useEffect, useRef, useState, useContext} from 'react'

import Header from './components/Header';
import WeatherPanel from './components/WeatherPanel';

import './scss/main.scss';
import TimeLocationPanel from './components/TimeLocationPanel';
import InteractionMenu from './components/InteractionMenu';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Scrollbar } from "swiper";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/scrollbar";

import LoadingContext from './context/Loading.context';

import DailyForecastList from './components/DailyForecastList';
import HourlyForecastList from './components/HourlyForecastList';
import BookmarksList from './components/BookmaksList';
import Loading from './components/Loading';
import DailyWeatherContext from './context/DailyWeather.context';
import BookmarkContext from './context/Bookmark.context';


const App = () =>{
    const [swiperSlide, setSwiperSlide] = useState<number>(0);
    const swiperRef = useRef() as any;

    const{isLoading} = useContext(LoadingContext);
    const {dailyWeather} = useContext(DailyWeatherContext);
    const {setWeatherData} = useContext(BookmarkContext);


    useEffect(()=>{
        if(dailyWeather !== null){
          setWeatherData(dailyWeather);
        }else{
          setWeatherData([]);
        }
    }, [dailyWeather])


    useEffect(() => {
        const url = new URL(window.location.href);
        const path = url.pathname;
        const slide = path.split('/')[1];

        switch(slide){
            case "daily":
                setSwiperSlide(0);
                break;
            case "hourly":
                setSwiperSlide(1);
                break;
            case "bookmarks":
                setSwiperSlide(2);
                break;
            default:
                setSwiperSlide(0);
                break;
        }  
    }, []);


    const slideTo = (index:number) => {
        swiperRef.current?.swiper.slideTo(index);
    }



    return (
        <>
            {
            isLoading ?
                <Loading /> 
                :
                <>
                    <section className="panel1">
                        <div className="wrapper">
                            <Header/>
                            <div className="data-container">
                                <WeatherPanel />
                                {window.innerWidth >= 768 ? <TimeLocationPanel/> : null}
                            </div>
                            <InteractionMenu slideto = {slideTo} currentslide={swiperSlide}/>
                        </div>
                    </section>


                    <section className="panel2">
                        <Swiper 
                            onInit={(core: SwiperCore) => {
                              swiperRef.current = core.el
                            }}
                            onSlideChange={(swiper) => setSwiperSlide(swiper.realIndex)}
                            initialSlide={swiperSlide}
                            scrollbar={{
                            hide: true,
                            }}
                            modules={[Scrollbar]}
                            className="swiper-container"
                        >
                            <SwiperSlide>
                                <DailyForecastList/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <HourlyForecastList/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <BookmarksList/>
                            </SwiperSlide>
                        </Swiper>
                    </section>
                </>
            }
        </>
    )
}

export default App;