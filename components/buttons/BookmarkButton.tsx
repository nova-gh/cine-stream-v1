"use client";

import { BsBookmarkPlusFill, BsBookmarkPlus } from "react-icons/bs";
import type { User } from "next-auth";
import { useRouter } from "next/navigation";

interface Props {
  user: User | undefined;
}
const BookmarkButton = ({ user }: Props) => {
  const router = useRouter();
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
      className="link_hover text-green-500 hover:text-green-300"
    >
      <BsBookmarkPlusFill className="" />
      <span className="sr-only">Bookmark</span>
    </button>
  );
};

export default BookmarkButton;
