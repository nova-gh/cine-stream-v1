"use client";

import { BsBookmarkPlusFill, BsBookmarkXFill } from "react-icons/bs";
import { VscLoading } from "react-icons/vsc";
import { useRouter } from "next/navigation";
import type { User } from "next-auth";
import { useState, useTransition } from "react";
import { toast } from "react-toastify";
import { BookmarkPayload, BookmarkItem } from "@/types/typing";

interface Props {
  user:
    | (User & {
        id: string;
        bookmarkIds: { id: string; tmdbId: string }[];
      })
    | undefined;
  bookmarkPayload: BookmarkPayload;
}
const BookmarkButton = ({ user, bookmarkPayload }: Props) => {
  const [submit, setSubmitting] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const savedBookmark =
    user?.bookmarkIds.find(
      (savedBookmark) =>
        savedBookmark.tmdbId === bookmarkPayload.tmdbId.toString()
    ) ?? null;

  const mediaPayload = {
    year: bookmarkPayload.year,
    type: bookmarkPayload.type,
    tmdbId: bookmarkPayload.tmdbId,
    poster: bookmarkPayload.poster,
    title: bookmarkPayload.title,
  };
  const handleAddBookmark = async () => {
    try {
      setSubmitting(true);
      const res = await fetch("/api/createBookmark", {
        method: "POST",
        body: JSON.stringify({ mediaPayload }),
      });
      const { data, error }: { data: BookmarkItem; error: string } =
        await res.json();
      if (error) throw error;
      toast.success(
        `${data.title}Bookmark Created, redirecting to dashboard..`
      );
      setSubmitting(false);
      startTransition(() => {
        router.refresh();
        router.push("/dashboard");
      });
    } catch (e) {
      const error = e as Error;
      toast.error(`Error: ${error}`);
    }
  };
  const handleRemoveBookmark = async () => {
    try {
      setSubmitting(true);
      const res = await fetch("/api/deleteBookmark", {
        method: "DELETE",
        body: JSON.stringify({
          bookmarkId: savedBookmark?.id,
          mediaTitle: bookmarkPayload.title,
        }),
      });
      const { data, error }: { data: { mediaTitle: string }; error: string } =
        await res.json();
      if (error) throw error;
      toast.success(`${data.mediaTitle} Bookmark Deleted..`);
      setSubmitting(false);
      startTransition(() => {
        router.refresh();
      });
    } catch (e) {
      const error = e as Error;
      toast.error(`Error: ${error}`);
    }
  };
  return (
    <button
      onClick={() => {
        if (!user) {
          toast.error("Please Sign In to Bookmark");
          router.push("/auth/signin");
        } else {
          savedBookmark ? handleRemoveBookmark() : handleAddBookmark();
        }
      }}
      disabled={submit || isPending}
      className={`link_hover flex items-center space-x-1 rounded-lg border ${
        savedBookmark
          ? "border-red-500 text-brand hover:text-brand-light"
          : "border-green-500  text-green-500 hover:text-green-300"
      } bg-bg-dark p-2  py-2 hover:bg-bg disabled:cursor-not-allowed `}
    >
      {submit || isPending ? (
        <VscLoading className="w-full animate-spin px-8" />
      ) : (
        <>
          <span className="text-base font-bold">
            {savedBookmark ? "Remove" : "Bookmark"}
          </span>
          {savedBookmark ? (
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
