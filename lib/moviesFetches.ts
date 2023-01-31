import { MediaItem } from "types/typing";
import { baseAPI } from "./constants";

export const getNowPlayingMovies = async () => {
  const res = await fetch(
    `${baseAPI}/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US&page=1&region=us`,
    { next: { revalidate: 2000 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch upcoming movie list data");
  }
  const data = await res.json();
  const parsedData: MediaItem[] = data.results
    .filter(
      (movie: MediaItem) =>
        movie.backdrop_path !== null &&
        movie.poster_path !== null &&
        movie.original_language == "en"
    )
    .slice(0, 10);
  return parsedData;
};

export const getUpcommingMovies = async () => {
  const res = await fetch(
    `${baseAPI}/movie/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=1&region=us`,
    { next: { revalidate: 2000 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch upcoming movie list data");
  }
  const data = await res.json();
  const parsedData: MediaItem[] = data.results
    .filter(
      (movie: MediaItem) =>
        movie.backdrop_path !== null &&
        movie.poster_path !== null &&
        movie.release_date > "2023-01-01" &&
        movie.original_language == "en"
    )
    .sort(() => Math.random() - 0.5)
    .slice(0, 10);
  return parsedData;
};

export const getTopRatedMovies = async () => {
  const res = await fetch(
    `${baseAPI}/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1&region=us`,
    { next: { revalidate: 2000 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch upcoming movie list data");
  }
  const data = await res.json();
  const parsedData: MediaItem[] = data.results
    .filter(
      (movie: MediaItem) =>
        movie.backdrop_path !== null &&
        movie.poster_path !== null &&
        movie.original_language == "en"
    )
    .slice(0, 10);
  return parsedData;
};
