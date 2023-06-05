import { SUPA_BASE_URL } from "../../../Api";
import { supabase } from "../../../config/supabaseClient";

//ACTION CREATOR

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { QueryReturnValue } from "../../../Types/globalTypes";
import { User, UserResponse } from "@supabase/supabase-js";

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
          if (event === "SIGNED_IN") console.log("signed in");
          if (event === "SIGNED_OUT") console.log("signed out");
          return () => {
            userdata.data.subscription.unsubscribe();
          };
        });
        return { data: userdata };
      },
    }),
    // getUser: builder.query<User | null, void>({
    //   queryFn: async () => {
    //     const getUserObj = await supabase.auth
    //       .getUser()
    //       .then((val) => {
    //         return val.data.user;
    //       })
    //       .catch((error) => {
    //         return error;
    //       });
    //     return { data: getUserObj };
    //   },
    // }),
  }),
});

export const { useUserDataQuery } = UserApiSlice;
