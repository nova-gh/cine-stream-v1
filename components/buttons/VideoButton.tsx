"use client";
import { TrailersResult } from "@/types/typing";
import { useState } from "react";
import { RiMovieFill } from "react-icons/ri";
import Modal from "../common/Modal";
type Props = {
  trailer: TrailersResult | undefined;
  name: string | null;
};
const VideoButton = ({ trailer, name }: Props) => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="link_hover text-brand hover:text-brand-dark"
      >
        <RiMovieFill />
        <span className="sr-only">Play Video</span>
      </button>
      <Modal
        closeModal={closeModal}
        isOpen={isOpen}
        name={name}
        trailer={trailer}
      />
    </>
  );
};

export default VideoButton;
