"use client";
import { useState, useTransition } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { FaTrash } from "react-icons/fa";
import { VscLoading } from "react-icons/vsc";

interface Props {
  bookmarkedId: string;
  mediaTitle: string;
}

const DeleteButton = ({ bookmarkedId, mediaTitle }: Props) => {
  const [submit, setSubmitting] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleRemoveBookmark = async () => {
    try {
      setSubmitting(true);
      const res = await fetch("/api/deleteBookmark", {
        method: "DELETE",
        body: JSON.stringify({
          bookmarkId: bookmarkedId,
          mediaTitle: mediaTitle,
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
      disabled={submit || isPending}
      onClick={handleRemoveBookmark}
      className="link_hover w-min rounded-lg border bg-bg-light px-3 py-2 hover:bg-brand disabled:cursor-not-allowed md:text-sm"
    >
      {submit || isPending ? (
        <VscLoading className="animate-spin text-xl" />
      ) : (
        <>
          <FaTrash className="text-lg " />
          <span className="sr-only">Remove</span>
        </>
      )}
    </button>
  );
};

export default DeleteButton;
