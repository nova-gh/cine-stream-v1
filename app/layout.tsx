import AuthProvider from "@/components/common/AuthProvider";
import { getSession } from "@/lib/session";
import Navbar from "../components/common/Navbar";
import "./globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  return (
    <html lang="en">
      <head />
      <body className=" body">
        <AuthProvider session={session}>
          <Navbar session={session} />
          <div className="main-wrapper">{children}</div>
        </AuthProvider>
      </body>
    </html>
  );
}
