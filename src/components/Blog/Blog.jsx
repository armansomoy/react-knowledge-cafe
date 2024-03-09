import React from "react";
import PropTypes from "prop-types";
import { FaRegBookmark } from "react-icons/fa6";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const {
    id,
    title,
    hashtags,
    reading_times,
    posted_date,
    author_img,
    author,
    cover,
  } = blog;

  return (
    <div className="mb-12 bg-sky-50 p-3">
      <img className="h-72 w-full mb-2" src={cover} alt="Cover Picture" />
      <div className="flex justify-between">
        <div className="flex p-2">
          <img
            className="w-14 h-14 mr-2"
            style={{ borderRadius: "100%" }}
            src={author_img}
            alt=""
          />
          <div>
            <h6 className="text-1xl font-semibold">{author}</h6>
            <p className="text-sm text-zinc-500">{posted_date}</p>
          </div>
        </div>
        <div className="flex ">
          <p className="pr-2 ">{reading_times} Min Read</p>
          <button
            className="p-0"
            onClick={() => {
              handleAddToBookmark(blog);
            }}
          >
            <FaRegBookmark />
          </button>
        </div>
      </div>
      <h4 className="text-4xl font-bold pb-3">{title}</h4>
      <p className="font-semibold text-zinc-400 mb-2">
        {" "}
        #{hashtags[0]}, #{hashtags[1]}
      </p>
      <button
        onClick={ () => handleMarkAsRead(id, reading_times)}
        className="text-violet-700 px-6 py-3 bg-violet-200"
      >
        Mark As Read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired,
};

export default Blog;
