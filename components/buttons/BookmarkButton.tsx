"use client";

import { BsBookmarkPlusFill, BsBookmarkXFill } from "react-icons/bs";
import { VscLoading } from "react-icons/vsc";
import { useRouter } from "next/navigation";
import type { User } from "next-auth";
import { useState } from "react";
import { toast } from "react-toastify";
import { delay } from "@/lib/utils";

interface Props {
  user:
    | (User & {
        id: string;
        bookmarkIds: String[];
      })
    | undefined;
  mediaItem: {
    year: string;
    type: string;
    tmdbId: string;
    poster: string;
    title: string;
  };
}
const BookmarkButton = ({ user, mediaItem }: Props) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const isBookmarked =
    user?.bookmarkIds.includes(mediaItem.tmdbId.toString()) ?? null;

  const mediaPayload = {
    mediaYear: mediaItem.year,
    mediaType: mediaItem.type,
    tmdbId: mediaItem.tmdbId,
    userId: user?.id,
    poster_path: mediaItem.poster,
    title: mediaItem.title,
  };
  const handleAddBookmark = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/createBookmark", {
        method: "POST",
        body: JSON.stringify({ mediaPayload }),
      });
      const { data } = await res.json();
      toast.success(
        `${mediaPayload.title} Bookmark Created, redirecting to dashboard..`
      );
      await delay(2500);
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Error creating Bookmark,");
    } finally {
      setLoading(false);
    }
  };
  const handleRemoveBookmark = async () => {
    toast.success(`Removed ${mediaItem.title}`);
  };
  return (
    <button
      onClick={() => {
        if (!user) {
          toast.error("Please Sign In to Bookmark");
          router.push("/auth/signin");
        } else {
          isBookmarked ? handleRemoveBookmark() : handleAddBookmark();
        }
      }}
      disabled={loading}
      className={`link_hover flex items-center space-x-1 rounded-lg border ${
        isBookmarked
          ? "border-red-500 text-brand hover:text-brand-light"
          : "border-green-500  text-green-500 hover:text-green-300"
      } bg-bg-dark p-2  py-2 hover:bg-bg disabled:cursor-not-allowed `}
    >
      {loading ? (
        <VscLoading className="w-full animate-spin px-8" />
      ) : (
        <>
          <span className="text-base font-bold">
            {isBookmarked ? "Remove" : "Bookmark"}
          </span>
          {isBookmarked ? (
            <BsBookmarkXFill />
          ) : (
            <BsBookmarkPlusFill className="" />
          )}
        </>
      )}
    </button>
  );
};

export default BookmarkButton;
