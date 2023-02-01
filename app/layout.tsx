import SearchWrapper from "@/components/common/SearchWrapper";
import Navbar from "../components/common/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className=" body">
        <Navbar />
        <div className="main-wrapper">{children}</div>
      </body>
    </html>
  );
}
