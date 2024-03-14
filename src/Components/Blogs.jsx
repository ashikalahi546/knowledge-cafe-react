import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";

export default function Blogs({handleToAddBookmark,handleToAddReadingTime}) {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="w-7/12 ">
      <h3 className="text-2xl mb-5">Blogs : {blogs.length} </h3>
      {blogs.map((blog) => (
        <Blog blog={blog} key={blog.id} handleToAddBookmark={handleToAddBookmark} handleToAddReadingTime={handleToAddReadingTime}></Blog>
      ))}
    </div>
  );
}
