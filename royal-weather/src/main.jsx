import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App'

import { DailyWeatherProvider } from './context/DailyWeather.context'
import { HourlyWeatherProvider } from './context/HourlyWeather.context'
import { CurrentWeatherProvider } from './context/CurrentWeather.context';
import { LoadingProvider } from './context/Loading.context';
import { BookmarkProvider } from './context/Bookmark.context';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
      <LoadingProvider>
        <BookmarkProvider>
          <DailyWeatherProvider>
            <HourlyWeatherProvider>
              <CurrentWeatherProvider>
                <Routes>
                  <Route path="/" element ={<App/>} />
                  <Route path="/daily" element ={<App/>} />
                  <Route path="/hourly" element ={<App/>} />
                  <Route path="/bookmarks" element ={<App/>} />
                </Routes>
              </CurrentWeatherProvider>
            </HourlyWeatherProvider>
          </DailyWeatherProvider>
        </BookmarkProvider>
      </LoadingProvider>
    </Router>
)
