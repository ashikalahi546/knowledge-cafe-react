
import { FaBookmark } from "react-icons/fa";
import Bookmarks from "./Bookmarks";
export default function Blog({blog,handleToAddBookmark,handleToAddReadingTime}) {
    const {id,cover,title,author_img,author,posted_date,hashtags,reading_time} = blog
  return (
    <div className="mb-5">
      <img className="w-full h-96 rounded-lg" src={cover} alt="" />
  
    <div className="flex justify-between items-center mt-3">
   <div>
   <div className="flex items-center gap-4">
     <img className="size-14 rounded-full" src={author_img} alt="" />
     <div>
        <h3>{author}</h3>
        <h3>{posted_date}</h3>
     </div>
     </div>
     <h3 className="mt-3 text-2xl font-medium">{title}</h3>
   </div>
    <div className="flex items-center gap-4 ">
    <h5>{reading_time} min</h5>
     <button onClick={()=>handleToAddBookmark(blog)} 
     className="text-orange-500"><FaBookmark></FaBookmark></button>
    </div>
   
    </div>
    <p className="my-2">
        {
            hashtags.map((hash,i) => <span key={i}>#{hash}</span>)
        }
     </p>
     <div>
        <button onClick={()=>handleToAddReadingTime(id,reading_time)}
         className="text-purple-500  font-medium underline">Mark as read</button>
     </div>
    </div>
  )
}
