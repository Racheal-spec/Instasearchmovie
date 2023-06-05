import { Session } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../config/supabaseClient";
import { QueryReturnValue } from "../../Types/globalTypes";

const UseAuth = (userdata?: QueryReturnValue) => {
  const [newsession, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const fetchSession = async () => {
      if (userdata?.data) {
        const {
          data: { session },
        } = await supabase.auth.getSession();
        setSession(session);
      }
    };
    fetchSession();
  }, [userdata?.data]);

  return { user: userdata, newsession };
};

export default UseAuth;
