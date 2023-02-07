import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import Tabs from "../Tabs/Tabs";
import IdentifyInput from "../../UI/RegistrationInput";
import FormLayout from "../../Layout/FormLayout";

const Login = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = data => {
    store.registration(email, firstName, lastName, password);
    navigate(from, { replace: true });
    reset();
  };

  return (
    <div className="mt-[140px] flex justify-center">
      <div className="form-login">
        <FormLayout>
          <form className="font-tt-regular" onSubmit={handleSubmit(onSubmit)}>
            <label
              htmlFor="emailReg"
              className="flex flex-col text-[#F0F0F0] mb-1 text-sm leading-[17px]"
            >
              Email address
            </label>
            <IdentifyInput
              {...register("email", {
                required: "email is require field!",
                pattern: {
                  value:
                    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                  message: "Please enter valid Email",
                },
              })}
              id="emailReg"
              type="email"
              placeholder="Enter your email"
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
            {errors?.email && (
              <div className="text-red-500">
                {errors?.email?.message || "Error!"}
              </div>
            )}

            <label
              htmlFor="password"
              className="flex flex-col text-[#F0F0F0] mt-4 mb-1 text-sm leading-[17px]"
            >
              Password
            </label>
            <IdentifyInput
              {...register("password", {
                required: "password is require field",
                minLength: {
                  value: 6,
                  message: "There must be at least 6 letters in your password",
                },
                maxLength: {
                  value: 15,
                  message:
                    "There cannot be more then 15 letters in your password",
                },
              })}
              id="password"
              type="password"
              placeholder="Enter your password"
              onChange={e => setFirstName(e.target.value)}
              value={firstName}
            />
            {errors?.password && (
              <div className="text-red-500">
                {errors?.password?.message || "Error!"}
              </div>
            )}
            <input
              type="submit"
              value="Log in"
              className="bg-[#00D8BE] rounded-lg mt-4 w-full py-[10.5px] text-[#141422] hover:bg-opacity-80 disabled:bg-opacity-60 cursor-pointer"
            />
          </form>
        </FormLayout>
      </div>
    </div>
  );
};

export default Login;
