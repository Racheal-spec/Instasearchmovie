export type ContentProp = {
  id: number;
  title: string;
  overview: string | undefined;
  vote_average: number;
  release_date: string;
  first_air_date?: number;
  name?: string;
  poster_path: string;
};

export type DetailsResponse = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {
    backdrop_path: string;
    id: number;
    name: string;
    poster_path: string;
  };
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  videos: {
    results: {
      id: string;
      iso_3166_1: string;
      iso_639_1: string;
      key: string;
      name: string;
      official: boolean;
      published_at: string;
      site: string;
      size: number;
      type: string;
    }[];
  };
  vote_average: number;
  vote_count: number;
};

export type SimilarsResponse = {
  results: DetailsResponse[];
};
export type DetailsProp = Partial<DetailsResponse>;
