import { Subscription } from "@supabase/supabase-js";

export type CommonContentProp = {
  id: number;
  title: string;
  overview?: string;
  vote_average?: number;
  release_date: string;
  first_air_date?: number;
  name?: string;
  poster_path: string;
  genre_ids?: number[];
  backdrop_path?: string;
  original_language?: string;
  adult?: boolean;
};

export type QueryReturnValue = {
  data: {
    subscription: Subscription;
  };
};

export type UserType = {
  id: string;
  aud: string;
  role: string;
  email: string;
  email_confirmed_at: string;
  phone: string;
  confirmation_sent_at: string;
  confirmed_at: string;
  last_sign_in_at: string;
  app_metadata: {
    provider: string;
    providers: string[];
  };
  user_metadata: null;
  identities: {
    id: string;
    user_id: string;
    identity_data: {
      email: string;
      sub: string;
    };
    provider: string;
    last_sign_in_at: string;
    created_at: string;
    updated_at: string;
  }[];

  created_at: string;
  updated_at: string;
};
