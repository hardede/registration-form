import { FormControl, FormLabel, Switch } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FormLayout from "../../Layout/FormLayout";
import { registerSchema } from "../../Schema/RegisterSchema";
import IdentifyInput from "../../UI/RegistrationInput";

const Login = () => {
  const [codeActive, setCodeActive] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = data => {
    reset();
  };

  return (
    <div className="mt-[140px] flex justify-center">
      <div className="form-login">
        <FormLayout>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label
              htmlFor="emailReg"
              className="flex flex-col text-[#F0F0F0] mb-1 text-sm leading-[17px]"
            >
              Email address
            </label>
            <IdentifyInput
              {...register("email")}
              id="emailReg"
              type="email"
              placeholder="Enter your email"
              required
            />
            <p className="text-red-500">{errors.email?.message}</p>
            <FormControl className="my-6 flex items-center">
              <Switch
                id="log-with-code"
                onChange={() => setCodeActive(!codeActive)}
              />
              <FormLabel
                className="text-[#F0F0F0] ml-3"
                htmlFor="log-with-code"
                mb="0"
              >
                Log with code
              </FormLabel>
            </FormControl>
            {!codeActive ? (
              <>
                <label
                  htmlFor="password"
                  className="flex flex-col text-[#F0F0F0] mb-1 text-sm leading-[17px]"
                >
                  Password
                </label>
                <IdentifyInput
                  {...register("password")}
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                />
                <p className="text-red-500">{errors.password?.message}</p>
                <div className="mt-[15px] mb-6 uppercase text-right text-base leading-[19px] text-[#00D8BE] cursor-pointer">
                  Forgot your password?
                </div>
              </>
            ) : null}

            <input
              type="submit"
              value="Log in"
              className="bg-[#00D8BE] rounded-lg  w-full py-[10.5px] text-[#141422] hover:bg-opacity-80 disabled:bg-opacity-60 cursor-pointer"
            />
          </form>
        </FormLayout>
      </div>
    </div>
  );
};

export default Login;
