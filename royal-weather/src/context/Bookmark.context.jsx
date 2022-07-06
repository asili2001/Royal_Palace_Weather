import { createContext, useEffect, useState } from "react";

const BookmarkContext = createContext();

export const BookmarkProvider = ({ children }) => {
    const [bookmarks, setBookmarks] = useState([]);
    const [weatherData, setWeatherData] = useState([]);
    const [activeBookmarks, setActiveBookmarks] = useState([]);


    useEffect(() => {
        getBookmarks();
    }, [weatherData]);


    const getBookmarks = async () => {
        try {

            const Lbookmarks = localStorage.getItem('bookmarks');
            if(Lbookmarks){
                setBookmarks(JSON.parse(Lbookmarks));
                const x = [];
                
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
    
    const addBookmark = (date) => {
        setBookmarks([...bookmarks, {date : date}]);
        
        //get the day object from the weatherData by date
        const day = weatherData.find(day => day.date === date);
        //add the day object to the activeBookmarks
        setActiveBookmarks([...activeBookmarks, day]);
        //save the bookmarks to local storage
        localStorage.setItem('bookmarks', JSON.stringify([...bookmarks, {date : date}]));

    }
    
    const removeBookmark = (date) => {
        setBookmarks(bookmarks.filter((item) => item.date !== date));
        //remove the day object from the activeBookmarks by date
        setActiveBookmarks(activeBookmarks.filter((item) => item.date !== date));
        //save the bookmarks to local storage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks.filter((item) => item.date !== date)));
    }


    const isBookmarked = (date) => {
        return bookmarks.some((item) => item.date === date);
    }
    
    return (
        <BookmarkContext.Provider value={{ activeBookmarks, setWeatherData, addBookmark, removeBookmark, isBookmarked }}>
        {children}
        </BookmarkContext.Provider>
    );
}

export default BookmarkContext;