import React, { useState } from "react";
import { LoginForm, Banner } from "../components/section";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Loading } from "../components/base";

const Login = () => {
  const email = "salt@mail.com";
  const password = "12345678";
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    setLoading(true);
    setTimeout(() => {
      if (data.email === email || data.password === password) {
        navigate("/login-success");
      } else {
        toast("Email atau password anda salah.");
      }
    }, 1500);
  };

  return (
    <>
      <div className="lg:flex h-screen">
        <div className="hidden lg:grid lg:w-[60%]">
          <Banner />
        </div>
        <div className="lg:w-[40%]">
          <LoginForm onSubmit={onSubmit} />
        </div>
      </div>
      <Loading loading={loading} />
    </>
  );
};

export default Login;
