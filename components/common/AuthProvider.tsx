"use client";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  children: React.ReactNode;
  session: Session | null;
};
const AuthProvider = ({ children, session }: Props) => {
  return (
    <SessionProvider session={session}>
      <ToastContainer theme="dark" />
      {children}
    </SessionProvider>
  );
};

export default AuthProvider;
