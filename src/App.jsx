import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import BookMarks from "./components/BookMarks/BookMarks";
import Bookmark from "./components/Bookmark/Bookmark";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, serReadingTime] = useState(0);

  const handleAddToBookmark = (blog) => {
    const newBookmars = [...bookmarks, blog];
    setBookmarks(newBookmars);
  };

  const handleMarkAsRead = (id, time) => {
    const newReadingTime = readingTime + time;
    serReadingTime(newReadingTime);

    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  };

  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs
          handleMarkAsRead={handleMarkAsRead}
          handleAddToBookmark={handleAddToBookmark}
        ></Blogs>
        <BookMarks readingTime={readingTime} bookmarks={bookmarks}></BookMarks>
      </div>
    </>
  );
}

export default App;
