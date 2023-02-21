import type { Session } from "next-auth";

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

export interface MovieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: BelongsToCollection;
  budget: number;
  genres?: GenresEntity[] | null;
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies?: ProductionCompaniesEntity[] | null;
  production_countries?: ProductionCountriesEntity[] | null;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages?: SpokenLanguagesEntity[] | null;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
export interface BelongsToCollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}
export interface GenresEntity {
  id: number;
  name: string;
}
export interface ProductionCompaniesEntity {
  id: number;
  logo_path?: string | null;
  name: string;
  origin_country: string;
}
export interface ProductionCountriesEntity {
  iso_3166_1: string;
  name: string;
}
export interface SpokenLanguagesEntity {
  english_name: string;
  iso_639_1: string;
  name: string;
}
export interface TvDetails {
  adult: boolean;
  backdrop_path: string;
  created_by?: null[] | null;
  episode_run_time?: null[] | null;
  first_air_date: string;
  genres?: GenresEntity[] | null;
  homepage: string;
  id: number;
  in_production: boolean;
  languages?: string[] | null;
  last_air_date: string;
  last_episode_to_air: LastEpisodeToAir;
  name: string;
  next_episode_to_air?: null;
  networks?: NetworksEntity[] | null;
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country?: string[] | null;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies?: ProductionCompaniesEntity[] | null;
  production_countries?: ProductionCountriesEntity[] | null;
  seasons?: SeasonsEntity[] | null;
  spoken_languages?: SpokenLanguagesEntity[] | null;
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
}
export interface GenresEntity {
  id: number;
  name: string;
}
export interface LastEpisodeToAir {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
}
export interface NetworksEntity {
  id: number;
  name: string;
  logo_path: string;
  origin_country: string;
}
export interface ProductionCompaniesEntity {
  id: number;
  name: string;
  logo_path?: string | null;
  origin_country: string;
}
export interface ProductionCountriesEntity {
  iso_3166_1: string;
  name: string;
}
export interface SeasonsEntity {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
}
export interface SpokenLanguagesEntity {
  english_name: string;
  iso_639_1: string;
  name: string;
}
export interface TrailersResponse {
  id: number;
  results: TrailersResult[];
}

export interface TrailersResult {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: Date;
  id: string;
}

export interface BookmarkItem {
  dateCreated: string;
  tmdbId: string;
  userId: string;
  year: string;
  poster: string;
  id: string;
  type: string;
  title: string;
}

export interface BookmarkPayload {
  year: string;
  type: string;
  tmdbId: string;
  poster: string;
  title: string;
}