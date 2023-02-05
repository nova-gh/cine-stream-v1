import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";

const BookmarksPage = async () => {
  const session = await getSession();
  if (!session) {
    redirect("/auth/signin");
  }
  return (
    <main className="main">
      <h1 className="section-title">Bookmarks</h1>
    </main>
  );
};

export default BookmarksPage;
