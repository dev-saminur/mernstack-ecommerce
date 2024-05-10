import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EmailVerifyLink = () => {
  let params = useParams();
  let navigate = useNavigate();
  console.log(params.token);
  useEffect(() => {
    async function verify() {
      let data = await axios.post(
        "http://localhost:8000/api/v1/auth/linkvarification",
        {
          token: params.token,
        }
      );
      navigate("/login");
      console.log(data);
    }
    verify();
  }, []);

  return (
    <div>
      <h2>Loading...</h2>
    </div>
  );
};

export default EmailVerifyLink;
