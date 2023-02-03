import SearchWrapper from "@/components/common/SearchWrapper";
import TrendingSection from "@/components/lists/TrendingSection";
import TvSection from "@/components/lists/TvSection";
import MovieSection from "@/components/lists/MovieSection";
import {
  getDiscoverTvs,
  getTrendingList,
  getDiscoverMovies,
} from "@/lib/dashboardFetch";

export default async function DashBoard() {
  const trendingData = getTrendingList();
  const discoverTvData = getDiscoverTvs();
  const discoverMovieData = getDiscoverMovies();
  const [trendingList, discoverTvs, discoverMovies] = await Promise.all([
    trendingData,
    discoverTvData,
    discoverMovieData,
  ]);
  return (
    <main className="main">
      <SearchWrapper>
        <input
          type="text"
          name=""
          id=""
          placeholder="Search for movies or TV"
          className="w-full px-4 py-2 text-xl text-white bg-bg"
        />
      </SearchWrapper>
      <TrendingSection list={trendingList} />
      <TvSection list={discoverTvs} title="Discover Tv Shows" />
      <MovieSection list={discoverMovies} title="Discover Movies" />
    </main>
  );
}
