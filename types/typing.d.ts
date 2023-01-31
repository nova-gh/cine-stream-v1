export type ReactChildren = {
  children: React.ReactNode;
};

export type MediaItem = {
  first_air_date: any;
  name: string;
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: Number[];
  popularity: number;
  release_date: string;
  video: false;
  vote_average: number;
  vote_count: number;
};
