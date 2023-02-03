"use client";

import { signOut } from "next-auth/react";
import { IoLogOut } from "react-icons/io5";

const SignoutButton = () => {
  return (
    <button
      onClick={() =>
        signOut({
          callbackUrl: "/",
        })
      }
      type="button"
      className="link_hover flex w-max items-center space-x-2 rounded-xl bg-brand px-3 py-4 font-semibold hover:bg-brand-dark"
    >
      <span className="">Sign Out</span>
      <span className="">
        <IoLogOut className="text-2xl" />
      </span>
    </button>
  );
};

export default SignoutButton;
