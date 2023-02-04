"use client";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

const BackButton = () => {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="link_hover flex w-min items-center rounded-lg p-2 px-3 text-base font-semibold text-white hover:bg-bg-dark lg:-ml-3 lg:text-lg"
    >
      <FaArrowLeft className="mr-3 " />
      Back
    </button>
  );
};

export default BackButton;
