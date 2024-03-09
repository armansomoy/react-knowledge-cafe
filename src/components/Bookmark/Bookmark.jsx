import React from "react";
import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className="bg-sky-50 p-4 m-2">
      <h2 className="font-semibold">{title}</h2>
    </div>
  );
};

// Bookmark.propTypes = {
//   bookmark: PropTypes.object.isRequired,
// };
export default Bookmark;
