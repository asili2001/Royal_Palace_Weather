//interfaces
export interface CurrentWeather {
    date : number;
    timezone : string;
    temp : number;
    weather : number;
    weatherDescription : string;
    sunrise : number;
    sunset : number;
    minTemp : number;
    maxTemp : number;
}

export interface DailyWeather {
    date : number;
    minTemp : number;
    maxTemp : number;
    weather : number;
    weatherDescription : string;
    sunrise : number;
    sunset : number;
}

export interface HourlyWeatherHour {
    date : number;
    time: number;
    weather : number;
    weatherDescription : string;
    temp : number;
}


export interface HourlyWeather {
    date : number;
    dateDay : number;
    hours : HourlyWeatherHour[];
}

export interface Boomark {
    date : number;
}


//types
export type LoadingActionTypes = 
    | { type: 'START' }
    | { type: 'END' };

export type BookmarksActionTypes =
    | { type: 'ADD', payload: Boomark }
    | { type: 'REMOVE', payload: Boomark }
    | { type: 'IS_BOOKMARKED', payload: Boomark }
