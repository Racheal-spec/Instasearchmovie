import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { supabase } from "../../config/supabaseClient";
import "./Success.scss";
const Success = () => {
  let navigate = useNavigate();

  useEffect(() => {
    const GetUser = async () => {
      await supabase.auth.getUser().then((val) => {
        if (val.data?.user) {
          console.log(val.data.user);
        }
      });
    };
    GetUser();
  }, []);
  return (
    <section className="successsection">
      <div>Success</div>
      <Button primary onClick={() => navigate("/")}>
        Go Back
      </Button>
    </section>
  );
};

export default Success;
