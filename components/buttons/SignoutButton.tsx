"use client";

import { signOut } from "next-auth/react";
import { IoLogOut } from "react-icons/io5";

const SignoutButton = () => {
  return (
    <button
      onClick={() => signOut()}
      type="button"
      className="flex items-center px-3 py-4 space-x-2 font-semibold link_hover w-max rounded-xl bg-brand hover:bg-brand-dark"
    >
      <span>
        <IoLogOut />
      </span>
      <span className="">Sign Out</span>
    </button>
  );
};

export default SignoutButton;
