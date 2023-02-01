"use client";

import { BsBookmarkPlusFill } from "react-icons/bs";

const BookmarkButton = () => {
  return (
    <button className="text-green-500 link_hover hover:text-green-600">
      <BsBookmarkPlusFill className="" />
      <span className="sr-only">Bookmark</span>
    </button>
  );
};

export default BookmarkButton;
