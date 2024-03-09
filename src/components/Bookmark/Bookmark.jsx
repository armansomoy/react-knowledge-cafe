import React from "react";

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className="bg-slate-200 p-4 m-2">
      <h2 className="font-semibold">{title}</h2>
    </div>
  );
};

export default Bookmark;
