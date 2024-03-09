import React from "react";
import Bookmark from "../Bookmark/Bookmark";
import PropTypes from "prop-types";

const BookMarks = ({ bookmarks, readingTime }) => {
  console.log(bookmarks);
  return (
    <div className="md:w-1/3 m-3 p-2 bg-sky-200">
      <div>
        <h3 className="text-violet-700 font-semibold bg-sky-50 p-3 mb-3">Spend Times On Read: {readingTime} Min</h3>
      </div>
      <h2 className="text-2xl font-bold">
        BookMarks Blogs: {bookmarks.length}
      </h2>

      <div className="">
        {bookmarks.map((bookmark) => (
          <Bookmark key={bookmarks.id} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

BookMarks.propTypes = {
  bookmarks: PropTypes.func.isRequired,
};

export default BookMarks;
