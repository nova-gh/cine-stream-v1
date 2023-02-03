import MovieSection from "@/components/lists/MovieSection";
import {
  getUpcommingMovies,
  getTopRatedMovies,
  getNowPlayingMovies,
} from "@/lib/moviesFetches";

const MoviesPage = async () => {
  const upcomingData = getUpcommingMovies();
  const allTimeGreatData = getTopRatedMovies();
  const nowPlayingData = getNowPlayingMovies();
  const [upcomingMovies, topRatedMovies, nowPlayingMovies] = await Promise.all([
    upcomingData,
    allTimeGreatData,
    nowPlayingData,
  ]);
  return (
    <main className="main">
      <h1 className="section-title ">Movies</h1>
      <MovieSection list={topRatedMovies} title="Top All Time" />
      <MovieSection list={nowPlayingMovies} title="Now Playing" />
      <MovieSection list={upcomingMovies} title="Upcoming" />
    </main>
  );
};

export default MoviesPage;
