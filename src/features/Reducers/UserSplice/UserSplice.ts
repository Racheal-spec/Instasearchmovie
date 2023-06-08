import { SUPA_BASE_URL } from "../../../Api";
import { supabase } from "../../../config/supabaseClient";

//ACTION CREATOR

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { QueryReturnValue } from "../../../Types/globalTypes";

export const UserApiSlice = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: SUPA_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    userData: builder.query<QueryReturnValue, void>({
      queryFn: async () => {
        const userdata = supabase.auth.onAuthStateChange(async (event) => {
          return () => {
            userdata.data.subscription.unsubscribe();
          };
        });
        return { data: userdata };
      },
    }),
  }),
});

export const { useUserDataQuery } = UserApiSlice;
