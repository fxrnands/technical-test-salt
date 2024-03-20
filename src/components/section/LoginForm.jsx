import React, { useState } from "react";
import { Input, Button } from "../base";
import { useForm, Controller } from "react-hook-form";
import { Hidden, Show } from "../../assets/icons";

const LoginForm = ({ onSubmit }) => {
  const { handleSubmit, control } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="w-full px-4 lg:px-28 py-16 lg:py-[120px]">
      <h1 className="font-bold text-[32px]">Hello</h1>
      <p className="text-[18px] mt-3 lg:mt-0">
        Enter your email and password to login.
      </p>
      <p className="font-semibold lg:hidden text-[23px] mt-8">Login</p>
      <p className="font-semibold mt-4">Email</p>
      <Controller
        name="email"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <Input
            {...field}
            type={"email"}
            placeholder={"Email"}
            className={`border border-secondary-purple rounded-[8px] py-2 mt-0.5 outline-none px-2.5 w-full`}
          />
        )}
      />
      <p className="font-semibold mt-4">Password</p>
      <Controller
        name="password"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <div className="relative">
            <Input
              {...field}
              type={showPassword ? "text" : "password"}
              placeholder={"Password"}
              className={`border border-secondary-purple rounded-[8px] py-2 mt-0.5 outline-none px-2.5 w-full pr-10`}
            />
            {showPassword ? (
              <img
                src={Show}
                width={20}
                alt="Show Password"
                onClick={() => setShowPassword(false)}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
              />
            ) : (
              <img
                src={Hidden}
                width={20}
                alt="Show Password"
                onClick={() => setShowPassword(true)}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
              />
            )}
          </div>
        )}
      />
      <div className="flex text-primary-grey justify-between items-center mt-3">
        <div className="flex justify-between items-center">
          <Input
            className={"mr-1.5 cursor-pointer accent-primary-purple"}
            type={"checkbox"}
          />
          <span>Remember me</span>
        </div>
        <div className="underline cursor-pointer">Forgot password?</div>
      </div>
      <div className="flex gap-5 mt-4">
        <Button
          children={"Login"}
          type={"button"}
          onClick={handleSubmit(onSubmit)}
          className={`border w-full rounded-[8px] text-center py-2 font-semibold border-primary-purple bg-primary-purple text-white`}
        />
        <Button
          children={"Sign Up"}
          className={`border w-full rounded-[8px] font-semibold text-center py-2 border-black text-black`}
        />
      </div>
      <div className="flex justify-center mt-12">
        <p className="text-[14px]">Or, login with</p>
      </div>
      <div className="flex gap-3 mt-4">
        <Button
          children={"Facebook"}
          className={`border border-secondary-purple w-full rounded-[8px] font-[500] text-center py-2 text-black`}
        />
        <Button
          children={"Linked In"}
          className={`border w-full rounded-[8px] font-[500] text-center py-2 border-secondary-purple text-black`}
        />
        <Button
          children={"Google"}
          className={`border w-full rounded-[8px] font-[500] text-center py-2 border-secondary-purple text-black`}
        />
      </div>
    </form>
  );
};

export default LoginForm;
