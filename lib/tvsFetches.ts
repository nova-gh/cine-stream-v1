import { MediaItem, TrailersResponse, TvDetails } from "types/typing";
import { baseAPI } from "./constants";

export const getTvsAiringThisWeek = async () => {
  const res = await fetch(
    `${baseAPI}/tv/on_the_air?api_key=${process.env.API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 2000 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch airing tv shows today data");
  }
  const data = await res.json();
  const parsedData: MediaItem[] = data.results
    .filter(
      (tv: MediaItem) =>
        tv.backdrop_path !== null &&
        tv.poster_path !== null &&
        tv.original_language == "en"
    )
    .slice(0, 10);

  return parsedData;
};

export const getPopularTvs = async () => {
  const res = await fetch(
    `${baseAPI}/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=1&region=us`,
    { next: { revalidate: 2000 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch popular shows data");
  }
  const data = await res.json();
  const parsedData: MediaItem[] = data.results
    .filter(
      (tv: MediaItem) =>
        tv.backdrop_path !== null &&
        tv.poster_path !== null &&
        tv.original_language == "en"
    )
    .slice(0, 10)
    .sort(() => Math.random() - 0.5);
  return parsedData;
};

export const getTopRatedTvs = async () => {
  const res = await fetch(
    `${baseAPI}/tv/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1&region=us`,
    { next: { revalidate: 2000 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch top shows data");
  }
  const data = await res.json();
  const parsedData: MediaItem[] = data.results
    .filter(
      (tv: MediaItem) =>
        tv.backdrop_path !== null &&
        tv.poster_path !== null &&
        tv.original_language == "en" &&
        tv.first_air_date >= "2000-01-01"
    )
    .slice(0, 10);
  return parsedData;
};

export const getTvDetails = async (id: string) => {
  const res = await fetch(
    `${baseAPI}/tv/${id}?api_key=${process.env.API_KEY}&language=en-US`
  );
  if (!res.ok) {
    return undefined;
  }
  const data: TvDetails = await res.json();
  return data;
};

export const getTvTrailer = async (id: string) => {
  const res = await fetch(
    `${baseAPI}/tv/${id}/videos?api_key=${process.env.API_KEY}&language=en-US`
  );
  if (!res.ok) {
    return undefined;
  }
  const data: TrailersResponse = await res.json();
  const parsedData = data.results.sort(
    (a, b) =>
      Date.parse(a.published_at.toString()) -
      Date.parse(b.published_at.toString())
  );
  return parsedData[0];
};
