import { dbClient } from "@/lib/db";
import { getSession } from "@/lib/session";
import { QueryCommand } from "@aws-sdk/lib-dynamodb";
import { redirect } from "next/navigation";
import BookmarkCard from "@/components/common/BookmarkCard";

const BookmarksPage = async () => {
  const session = await getSession();
  if (!session) {
    redirect("/auth/signin");
  }
  const response = await dbClient.send(
    new QueryCommand({
      TableName: "bookmarks",
      IndexName: "UserBookmarks",
      KeyConditionExpression: "userId  = :u_id",
      ExpressionAttributeValues: {
        ":u_id": session.user.id,
      },
    })
  );
  const bookmarkedMovies = response.Items?.filter(
    (item) => item.type == "movies"
  );
  const bookmarkedTvs = response.Items?.filter((item) => item.type == "tvs");
  return (
    <main className="details-main">
      {response.Count && response?.Count > 0 ? (
        <>
          {bookmarkedMovies?.length ? (
            <>
              <h1 className="section-title mb-0">Bookmarked Movies</h1>
              <section className="">
                <div className="grid grid-cols-2 gap-4 px-1 sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:grid-cols-5">
                  {bookmarkedMovies?.map((movie) => (
                    <BookmarkCard item={movie} key={movie.id} />
                  ))}
                </div>
              </section>
            </>
          ) : null}
          {bookmarkedTvs?.length ? (
            <>
              <h2 className="section-title mb-0">Bookmarked Tv Shows</h2>
              <section className="">
                <div className="grid grid-cols-2 gap-4 px-1 sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:grid-cols-5">
                  {bookmarkedTvs?.map((tv) => (
                    <BookmarkCard item={tv} key={tv.id} />
                  ))}
                </div>
              </section>
            </>
          ) : null}
        </>
      ) : (
        <>
          <h1 className="section-title mb-0">No Bookmark found</h1>
          <p className="mt-1 lg:text-lg">
            Search for a Movie or Tv Show and add them to bookmark.
          </p>
        </>
      )}
    </main>
  );
};

export default BookmarksPage;
