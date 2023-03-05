import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { REGISTER_NEW_USER } from "../../../apollo/Auth/Identify";
import FormLayout from "../../Layout/FormLayout";
import { registerSchema } from "../../../services/Schema/RegisterSchema";
import IdentifyInput from "../../UI/RegistrationInput";
import ConfirmCode from "../ConfirmCode/ConfirmCode";

const SignUp = () => {
  const [confirm, setConfirm] = useState(false);
  const [email, setEmail] = useState("");
  const [registrationNewUser] = useMutation(REGISTER_NEW_USER, {
    context: { uri: "https://api.develop.rivalfantasy.com/auth/graphql" },
  });

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
    registrationNewUser({
      variables: { input: { email: data.email, password: data.password } },
    });
    setEmail(data.email);
    reset();
    setConfirm(true);
  };

  return (
    <>
      {confirm ? (
        <ConfirmCode email={email} strategy="PASSWORD" />
      ) : (
        <div className="mt-[80px] flex justify-center">
          <div className="form-signup">
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

                <label
                  htmlFor="password"
                  className="flex flex-col text-[#F0F0F0] mt-4 mb-1 text-sm leading-[17px]"
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
                <label
                  htmlFor="confirmPassword"
                  className="flex flex-col text-[#F0F0F0] mt-4 mb-1 text-sm leading-[17px]"
                >
                  Confirm password
                </label>
                <IdentifyInput
                  {...register("confirmPassword")}
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  required
                />
                <p className="text-red-500">
                  {errors.confirmPassword?.message}
                </p>
                <label
                  htmlFor="promo"
                  className="flex flex-col text-[#F0F0F0] mt-4 mb-1 text-sm leading-[17px]"
                >
                  Promo code (optional)
                </label>
                <IdentifyInput
                  type="text"
                  pattern="\d*"
                  maxLength="6"
                  minLength="6"
                  {...register("promo", {
                    valueAsNumber: true,
                  })}
                  id="promo"
                  placeholder="Enter promo code here"
                />
                {errors?.promo && (
                  <div className="text-red-500">{errors.promo.message}</div>
                )}

                <input
                  type="submit"
                  value="Sign up"
                  className="form-confirm-btn mt-4"
                />
              </form>
            </FormLayout>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUp;
