import Header from "./Components/Header";
import "./App.css";
import Blogs from "./Components/Blogs";
import Bookmarks from "./Components/Bookmarks";
import { useState } from "react";

function App() {
  const [bookmarks,setBookmark] = useState([]);
  const handleToAddBookmark = blog =>{

    const newBookmark = [...bookmarks,blog];
    setBookmark(newBookmark)
  }

  const [readingTime,setReadingTime] = useState(0);
  const handleToAddReadingTime = (id,time) =>{
   const newReadingTime = readingTime + time;
   setReadingTime(newReadingTime)
   const remainingBook = bookmarks.filter(bookmark => bookmark.id !== id);
setBookmark(remainingBook)
  }
  
  return (
    <>
      <Header></Header>
      <div className="flex max-w-7xl mx-auto gap-10">
        <Blogs handleToAddBookmark={handleToAddBookmark}
        handleToAddReadingTime={handleToAddReadingTime}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
