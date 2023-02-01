"use client";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

const BackButton = () => {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="flex items-center p-2 px-3 -ml-3 text-base font-semibold text-white rounded-lg link_hover w-min hover:bg-bg-dark lg:text-lg"
    >
      <FaArrowLeft className="mr-3 " />
      Back
    </button>
  );
};

export default BackButton;
