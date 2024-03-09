import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import BookMarks from "./components/BookMarks/BookMarks";

function App() {
  const [bookmarks, serBookmarks] = useState([]);
  const [readingTime, serReadingTime] = useState(0);
  
  const handleAddToBookmark = blog => {
    console.log('added');
    const newBookmars = [...bookmarks, blog];
    serBookmarks(newBookmars);
  }

  const handleMarkAsRead = time => {
    console.log(time);
    const newReadingTime = readingTime + time;
    serReadingTime(newReadingTime);
  }
  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs handleMarkAsRead={handleMarkAsRead} handleAddToBookmark={handleAddToBookmark}></Blogs>
        <BookMarks readingTime={readingTime} bookmarks={bookmarks}></BookMarks>
      </div>
    </>
  );
}

export default App;
