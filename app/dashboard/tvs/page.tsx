import TvSection from "@/components/lists/TvSection";
import {
  getTvsAiringThisWeek,
  getTopRatedTvs,
  getPopularTvs,
} from "@/lib/tvsFetches";

const TvPage = async () => {
  const airingThisWeekData = getTvsAiringThisWeek();
  const topAllTimeData = getTopRatedTvs();
  const popularData = getPopularTvs();

  const [airingTvs, topTvs, popularTvs] = await Promise.all([
    airingThisWeekData,
    topAllTimeData,
    popularData,
  ]);
  return (
    <main className="main">
      <h1 className="section-title ">Tv Shows</h1>
      <TvSection title="Top All Time" list={topTvs} />
      <TvSection title="Popular Right Now" list={popularTvs} />
      <TvSection title="Airing this week" list={airingTvs} />
    </main>
  );
};

export default TvPage;
