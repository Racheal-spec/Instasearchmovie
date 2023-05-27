export type CommonContentProp = {
  id: number;
  title: string;
  overview?: string;
  vote_average: number;
  release_date: string;
  first_air_date?: number;
  name?: string;
  poster_path: string;
  genre_ids?: number[];
  backdrop_path?: string;
  original_language?: string;
  adult?: boolean;
  // genres?: {
  //   id: number;
  //   name: string;
  // }[];
  // production_companies?: {
  //   id: number;
  //   logo_path: string;
  //   name: string;
  //   origin_country: string;
  // }[];
};
