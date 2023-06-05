import React from "react";
import { supabase } from "../../config/supabaseClient";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import "./Login.scss";

const Login = () => {
  return (
    <div>
      <div className="loginsection">
        <Auth
          supabaseClient={supabase}
          appearance={{
            theme: ThemeSupa,
            extend: true,
            className: { container: "authcss" },
          }}
          theme="dark"
          providers={["google"]}
        />
      </div>
    </div>
  );
};

export default Login;
