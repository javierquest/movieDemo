export interface MODBMovieType {
  backdrop_path: string | null;
  budge: number;
  genres: { name: string} [];
  id: number;
  imdb_id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  revenue: number;
  runtime: number | null;
  status: 'Rumored' | 'Planned' | 'In Production' | 'Post Production' | 'Released' | 'Canceled';
  title: string;
}

export interface OmbdbMovieType {
  Year: string;
  Rated: string | null;
  Director: string;
  Actors: string;
  Ratings: { Source: string, Value: string } [];
  Runtime: string | null;
  Released: string | null;
  Language: string | null;
  Genre: string | null;
}

export interface MODBMovieVideoType {
  results: {
    name: string;
    key: string;
    site: string;
  } []
}

export interface MODBMoviewImageType {
  backdrops: {
    file_path: string;
    width: number
  }[],
  posters: {
    file_path: string;
    width: number
  }[],
}