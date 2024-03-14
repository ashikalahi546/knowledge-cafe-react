import Bookmark from "../Bookmark";

export default function Bookmarks({ bookmarks,readingTime }) {
  return (
<div className="w-5/12">
<div className="bg-gray-200 p-5 rounded-xl mb-5">
<h3 className="text-center font-medium text-xl">Spent time on read : {readingTime}  min</h3>
</div>
<div className=" bg-gray-100 p-3 rounded-lg text-xl font-medium">
      <h3 className="text-center ">Bookmarked Blogs : {bookmarks.length} </h3>
      <div className="#">
        {bookmarks.map((bookmark,e) => (
          <Bookmark bookmark={bookmark} key={e}></Bookmark>
        ))}
      </div>
    </div>
</div>
  );
}
