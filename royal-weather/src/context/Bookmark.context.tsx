import { createContext, ReactNode, useEffect, useState } from "react";
import {Boomark, DailyWeather } from "../model";

interface Props {
    addBookmark: (date: number) => void,
    removeBookmark: (date: number) => void,
    isBookmarked: (date: number) => boolean,
    activeBookmarks: DailyWeather[],
    setWeatherData: React.Dispatch<React.SetStateAction<DailyWeather[]>>
}

const BookmarkContext = createContext<Props>(null as any);



export const BookmarkProvider = ({ children } : {children : ReactNode}) => {
    const [bookmarks, setBookmarks] = useState<Boomark[]>([]);
    const [weatherData, setWeatherData] = useState<DailyWeather[]>([]);
    const [activeBookmarks, setActiveBookmarks] = useState<DailyWeather[]>([]);


    useEffect(() => {
        getBookmarks();
    }, [weatherData]);


    const getBookmarks = async () => {

        try {
            const Lbookmarks = localStorage.getItem('bookmarks');
            if(Lbookmarks){
                setBookmarks(JSON.parse(Lbookmarks));
                const x:DailyWeather[] = [];
                
                bookmarks && bookmarks.forEach(bookmark => {
                    const bookmarkedDays = weatherData?.find(day => day.date === bookmark.date)
                    if(bookmarkedDays !== undefined){
                        x.push(bookmarkedDays);
                    }

                })
                setActiveBookmarks(x);
            }
        } catch (error) {
            console.error(error);
            return;
        }
    }
    
    //handlers
    const addBookmark = (date: number) => {

        setBookmarks([...bookmarks, {date : date}]);

        const day = weatherData.find(day => day.date === date);

        if(day !== undefined){
            setActiveBookmarks([...activeBookmarks, day]);
            
            localStorage.setItem('bookmarks', JSON.stringify([...bookmarks, {date : date}]));
            
        }
    }
    const removeBookmark = (date: number) => {
        setBookmarks(bookmarks.filter((item) => item.date !== date));

        setActiveBookmarks(activeBookmarks.filter((item) => item.date !== date));
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks.filter((item) => item.date !== date)));
    }

    const isBookmarked = (date:number) => {
        return bookmarks.some((item) => item.date === date);
    }


    
    return (
        <BookmarkContext.Provider value={{ addBookmark, removeBookmark, isBookmarked, activeBookmarks, setWeatherData }}>
        {children}
        </BookmarkContext.Provider>
    );
}

export default BookmarkContext;