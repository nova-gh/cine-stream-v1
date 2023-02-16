import SearchInput from "@/components/common/SearchInput";
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
      <div className="pt-5 ">
        <SearchInput />
      </div>
      <TrendingSection list={trendingList} />
      <TvSection list={discoverTvs} title="Discover Tv Shows" />
      <MovieSection list={discoverMovies} title="Discover Movies" />
    </main>
  );
}
