import React from "react";
import Button from "../components/base/Button";
import { useNavigate } from "react-router-dom";

const LoginSuccess = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  return (
    <div className="h-screen mt-64">
      <div className="font-bold justify-center flex">
        <p>LOGIN TELAH SUKSES</p>
      </div>
      <div className="flex mt-4 justify-center">
        <Button
          onClick={handleBack}
          className={
            "border border-primary-purple bg-primary-purple text-white font-bold rounded-[8px] py-2 mt-0.5 outline-none px-2.5 w-32"
          }
          children={"Back to Login"}
        />
      </div>
    </div>
  );
};

export default LoginSuccess;
