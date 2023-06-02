import React, { useEffect } from "react";
import { supabase } from "../../config/supabaseClient";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";
import { useUserDataQuery } from "../../features/Reducers/UserSplice/UserSplice";
import UseAuth from "../../services/Hooks/UseAuth";

const Login = () => {
  const { data: userdata } = useUserDataQuery();
  let navigate = useNavigate();
  const { user, newsession } = UseAuth(userdata);
  console.log(user?.data, newsession);

  //   console.log(userdata);

  return (
    <div>
      <div>Login</div>
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        theme="dark"
        providers={["google"]}
      />
    </div>
  );
};

export default Login;
