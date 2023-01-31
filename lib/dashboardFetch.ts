import { MediaItem } from "types/typing";
import { baseAPI } from "./constants";
export const getTrendingList = async () => {
  const res = await fetch(
    `${baseAPI}/trending/all/day?api_key=${process.env.API_KEY}`,
    { next: { revalidate: 2000 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch trending list data");
  }
  const data = await res.json();
  const parsedData: MediaItem[] = data.results
    .filter(
      (d: MediaItem) =>
        d.media_type !== "person" &&
        d.backdrop_path !== null &&
        d.poster_path !== null
    )
    .sort(() => Math.random() - 0.5)
    .slice(0, 10);
  return parsedData;
};

export const getDiscoverTvs = async () => {
  const res = await fetch(
    `${baseAPI}/discover/tv?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&first_air_date.gte=2022-01-01&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_original_language=en&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,
    { next: { revalidate: 2000 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch Discover TV data");
  }
  const data = await res.json();
  const parsedData: MediaItem[] = data.results
    .filter(
      (d: MediaItem) => d.backdrop_path !== null && d.poster_path !== null
    )
    .slice(0, 10)
    .sort(() => Math.random() - 0.5);
  return parsedData;
};

export const getDiscoverMovies = async () => {
  const res = await fetch(
    `${baseAPI}/discover/movie?api_key=${process.env.API_KEY}&language=en-US&region=us&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=2022-01-01&with_watch_monetization_types=flatrate`,
    { next: { revalidate: 2000 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch Discover Movie data");
  }
  const data = await res.json();
  const parsedData: MediaItem[] = data.results
    .filter(
      (d: MediaItem) => d.backdrop_path !== null && d.poster_path !== null
    )
    .slice(0, 10)
    .sort(() => Math.random() - 0.5);

  return parsedData;
};
