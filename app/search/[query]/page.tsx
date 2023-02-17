import { MediaItem } from "@/types/typing";
import Card from "@/components/common/Card";
import SearchInput from "@/components/common/SearchInput";

type Props = {
  params: { query: string };
  searchParams?: { [option: string]: string | undefined };
};

const getSearchResults = async (query: string, option: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/${option}?api_key=${process.env.API_KEY}&language=en-US&query=${query}&page=1&include_adult=false&region=us`
  );
  const data = await res.json();
  const parsedData: MediaItem[] = data.results;
  return parsedData;
};

const DynamicMoviePage = async ({ params, searchParams }: Props) => {
  const query = params.query;
  const option = searchParams?.option;
  const searchResults = await getSearchResults(query, option!);
  const formatedQuery = query.replaceAll("%20", " ");
  return (
    <main className="details-main">
      <h1 className="section-title mb-0 ">Search Results: {formatedQuery}</h1>
      <SearchInput option={option} />
      <section className="">
        {!searchResults.length ? (
          <>
            <p className="mt-1 lg:text-lg">
              No results found for {formatedQuery}
            </p>
          </>
        ) : (
          <div className="grid grid-cols-2 gap-4 px-1 sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:grid-cols-5">
            {searchResults?.map((result) => (
              <Card item={result} key={result.id} type="movie" />
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default DynamicMoviePage;
