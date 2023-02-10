"use client";

import { BsBookmarkPlusFill, BsBookmarkXFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
import type { User } from "next-auth";
import { MovieDetails, TvDetails } from "@/types/typing";

interface Props {
  user:
    | (User & {
        id: string;
        bookmarkIds: String[];
      })
    | undefined;
  mediaItem: MovieDetails | TvDetails;
}
const BookmarkButton = ({ user, mediaItem }: Props) => {
  const router = useRouter();
  const isBookmarked =
    user?.bookmarkIds.includes(mediaItem.id.toString()) ?? null;
  const handleAddBookmark = () => {
    if (!user) {
      router.push("/auth/signin");
    } else {
      alert(user.name);
    }
  };
  return (
    <button
      onClick={handleAddBookmark}
      className={`link_hover flex items-center space-x-1 rounded-lg border ${
        isBookmarked
          ? "border-red-500 bg-bg-dark text-brand hover:text-brand-light"
          : "border-green-500  text-green-500 hover:text-green-300"
      } bg-bg-dark p-2  py-2 hover:bg-bg `}
    >
      <span className="text-base font-bold">
        {isBookmarked ? "Remove" : "Bookmark"}
      </span>
      {isBookmarked ? <BsBookmarkXFill /> : <BsBookmarkPlusFill className="" />}
    </button>
  );
};

export default BookmarkButton;
