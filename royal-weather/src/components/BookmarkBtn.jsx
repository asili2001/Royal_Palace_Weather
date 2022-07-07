import { useContext } from "react";
import BookmarkContext from "../context/Bookmark.context";

import BookmarkUncheck from '../assets/bookmark-uncheck.svg';
import BookmarkCheck from "../assets/bookmark.svg";

const BookmarkBtn = ({ date }) => {
    const { addBookmark, removeBookmark, isBookmarked } = useContext(BookmarkContext);
    return (
        <div className="bookmarkBtn">
            {isBookmarked(date) ? (
                <img
                    src={BookmarkUncheck}
                    alt="bookmark"
                    onClick={() => removeBookmark(date)}
                />
            ) : (
                <img
                    src={BookmarkCheck}
                    alt="bookmark"
                    onClick={() => addBookmark(date)}
                />
            )}
        </div>
    );
}
export default BookmarkBtn;